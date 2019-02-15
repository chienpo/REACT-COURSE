import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    model: '',
};

const reducer = (state = initialState, action: any) =>  {
    const filterAdvertisements = (state: any, action: any) => {
        return updateObject(state, {
            model: action.payload
        })
    };

    switch (action.type) {
        case actionTypes.FILTER_ADVERTISEMENTS_BY_MODEL: return filterAdvertisements(state, action);
        default: return state;
    }
};

export default reducer;