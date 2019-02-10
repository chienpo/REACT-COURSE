import * as actionTypes from '../actions/actionTypes';
import { updateObject } from "../utility";

const initialState = {
    userId: null,
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

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return getAdvertisementsStart(state, action);
        case actionTypes.AUTH_SUCCESS: return getAdvertisementsSuccess(state, action);
        case actionTypes.AUTH_FAIL: return getAdvertisementsFail(state, action);
        default: return state;
    }
};

export default reducer;