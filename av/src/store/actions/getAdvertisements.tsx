import axios from 'axios';

import * as actionTypes from './actionTypes';

export const getAdvertisementsStart = () => {
    return {
        type: actionTypes.GET_ADVERTISEMENTS_START
    };
};

export const getAdvertisementsSuccess = (advertisements: any) => {
    // const fetchedAdvertisements: any = [];
    //
    // for (let key in advertisements) {
    //     fetchedAdvertisements.push({
    //         ...advertisements[key],
    //         id: key
    //     });
    // }

    return {
        type: actionTypes.GET_ADVERTISEMENTS_SUCCESS,
        advertisements: advertisements
    };
};

export const getAdvertisementsFail = (error: any) => {
    return {
        type: actionTypes.GET_ADVERTISEMENTS_FAIL,
        error: error
    };
};

// //filter
// export const filterAdvertisementsByName = (advertisements: any) => {
//     advertisements.filter((pilot: any, index: any, arr: any) => {
//         return pilot.transmission === 'manual'
//     }).concat((val: any) => val);
//
//     return {
//         type: actionTypes.FILTER_ADVERTISEMENTS_BY_NAME,
//         advertisements
//     };
// };

export const getAdvertisements = () => {
    return (dispatch: any) => {
        dispatch(getAdvertisementsStart());

        const url = 'https://avto-56119.firebaseio.com/advertisements.json';

        axios.get(url)
            .then(response => {
                const fetchedAdvertisements: any = [];

                for (let key in response.data) {
                    fetchedAdvertisements.push({
                        ...response.data[key],
                        id: key
                    });
                }

                dispatch(getAdvertisementsSuccess(fetchedAdvertisements));
            })
            .catch(err => {
                dispatch(getAdvertisementsFail(err.response.data.error));
            });
    };
};