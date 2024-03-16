import React from 'react'
import { useSelector } from 'react-redux';
import LoaderGif from "../../../static/images/loader.gif"

export default function Loader() {
    const isLoading = useSelector(state => state.loading.isLoading);

    return (
        <div className={isLoading ? "loader" : "no-loader"} >
            <img src={LoaderGif} alt="loader" />
        </div>
    )
}