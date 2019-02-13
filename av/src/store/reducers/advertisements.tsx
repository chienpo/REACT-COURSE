import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    advertisements: null,
    error: null,
    loading: false
};

const getAdvertisementsStart = (state: any, action: any) => {
    return updateObject(state, {
        error: null,
        loading: true
    })
};

const getAdvertisementsSuccess = (state: any, action: any) => {
    return updateObject(state, {
        advertisements: action.advertisements,
        error: null,
        loading: false
    })
};

const getAdvertisementsFail = (state: any, action: any) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    })
};

const filterAdvertisementsByName = (state: any, action: any) => {

    console.log(action.name);

    const filteredAdvertisements = state.advertisements.filter((pilot: any, index: any, arr: any) => {
        return pilot.transmission === 'manual'
    }).concat((val: any) => val);


    return updateObject(state, {
        advertisements: filteredAdvertisements,
        loading: false
    })
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.GET_ADVERTISEMENTS_START: return getAdvertisementsStart(state, action);
        case actionTypes.GET_ADVERTISEMENTS_SUCCESS: return getAdvertisementsSuccess(state, action);
        case actionTypes.GET_ADVERTISEMENTS_FAIL: return getAdvertisementsFail(state, action);
        case actionTypes.FILTER_ADVERTISEMENTS_BY_NAME: return filterAdvertisementsByName(state, action);
        default: return state;
    }
};

export default reducer;