import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError } from '../../../../reducers/loadingSlice';
import Modal from '../Modal';
import { routes } from "../../../../routing/routeConsts"

export default function ErrorModal() {
    const error = useSelector(state => state.loading.error);
    const redirectAfterError = useSelector(state => state.loading.redirectAfterError);
    const cancelText = useSelector(state => state.loading.cancelText);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return error && (
        <Modal text={error} cancelText={cancelText} onCancelClick={() => {
            dispatch(setError(null));
            if (redirectAfterError) {
                navigate(routes.home);
            }
        }} />
    )
}