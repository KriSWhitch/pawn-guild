export const httpMethod = {
    get: "GET",
    post: "POST"
};

export const requestStatus = {
    idle: 'idle',
    loading: 'loading',
    succeeded: 'succeeded',
    failed: 'failed'
};

export const baseUrl = process.env.REACT_APP_API_ROOT_URL;

const createUrl = path => baseUrl + path;

export const getAllPawnsUrl = createUrl("/Pawn/GetAll");
export const addPawnUrl = createUrl("/Pawn/Add");