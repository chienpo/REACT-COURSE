import * as actionTypes from "../actions/actionTypes";
const initialState = '';

const reducer = (state = initialState, action: any) =>  {
    const filterAdvertisements = (state: any, action: any) => {
        return action.payload
    };

    switch (action.type) {
        case actionTypes.FILTER_ADVERTISEMENTS_BY_NAME: return filterAdvertisements(state, action);
        default: return state;
    }
};

export default reducer;