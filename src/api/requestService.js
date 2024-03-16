import axios, { CancelToken } from 'axios';
import { setError } from "../reducers/loadingSlice";
import store from '../store';

axios.interceptors.request.use(
    async config => {
        let source = CancelToken.source();
        setTimeout(() => {
            source.cancel();
        }, 180000); //180 sec
        config.cancelToken = source.token;
        if (config.withoutToken) {
            return config;
        }

        if (config.data instanceof FormData) {
            config.headers = { ...config.headers, "Content-Type": "multipart/form-data" }
        }
        return config;
    },
    error => error
);

axios.interceptors.response.use(
    response => response,
    async error => {
        if (axios.isCancel(error)) {
            store.dispatch(setError("The server takes a long time to respond. Please try again later"));
            return;
        }
        if (error.response?.status === 401) {
            await updateTokenAsync();
            return await axios(error.config);
        }

        const errorMessage = error?.response?.data?.ExceptionMessage
            ? "Something went wrong. Please try again later"
            : error?.response?.data?.Message;
        
        error?.config?.onError ? error?.config.onError(errorMessage) : store.dispatch(setError(errorMessage));
    }
);

export const addPawnAsync = async () => {
    //
}

export const sendRequestAsync = async (method, url, data, onError) => await axios({ method, url, data, onError });