import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './reducers/loadingSlice';

export default configureStore({
    reducer: {
        loading: loadingReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.REACT_APP_PRODUCTION === "false"
});