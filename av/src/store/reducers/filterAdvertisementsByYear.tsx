import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    year: ''
};

const reducer = (state = initialState, action: any) =>  {
    const filterAdvertisementsByYear = (state: any, action: any) => {
        return updateObject(state, {
            year: action.payload
        })
    };

    switch (action.type) {
        case actionTypes.FILTER_ADVERTISEMENTS_BY_YEAR: return filterAdvertisementsByYear(state, action);
        default: return state;
    }
};

export default reducer;