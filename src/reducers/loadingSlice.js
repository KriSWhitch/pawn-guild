import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice({
    name: 'loading',
    initialState: {
        isLoading: false,
        error: null,
        redirectAfterError: true,
        cancelText: "Close"
    },
    reducers: {
        changeLoadingStatus: (state, action) => {
            state.isLoading = state.error ? false : action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        setErrorWithoutRedirect: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
            state.redirectAfterError = false;
        },
        toggle: (state, action) => {
            state.isLoading = !state.isLoading;
        }
    }
})

export const {
    changeLoadingStatus,
    toggle,
    setError,
    setErrorWithoutRedirect
} = loadingSlice.actions

export default loadingSlice.reducer