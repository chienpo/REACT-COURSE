import * as actionTypes from '../actions/actionTypes';

const initialState = {
};

const reducer: any = ( state = initialState, action: any ) => {
    switch ( action.type ) {
        case actionTypes.SEARCH_RESULT: return null;
        default:
            return state;
    }
};

export default reducer;