import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getAdvertisementsStart = () => {
    return {
        type: actionTypes.GET_ADVERTISEMENTS_START
    };
};

export const getAdvertisementsSuccess = (advertisements: any) => {
    return {
        type: actionTypes.GET_ADVERTISEMENTS_SUCCESS,
        advertisements
    };
};

export const getAdvertisementsFail = (error: any) => {
    return {
        type: actionTypes.GET_ADVERTISEMENTS_FAIL,
        error: error
    };
};

export const getAdvertisements = () => {
    return (dispatch: any) => {
        dispatch(getAdvertisementsStart());

        const url = 'https://avto-56119.firebaseio.com/advertisements.json';

        axios.get(url)
            .then(response => {
                dispatch(getAdvertisementsSuccess(response.data));
            })
            .catch(err => {
                dispatch(getAdvertisementsFail(err.response.data.error));
            });
    };
};