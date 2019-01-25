import * as actionTypes from '../actions';

const initialState = {
    total: null,
    operation: null,
    next: null
}

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.AC:
            return {
                ...state,
                total: null,
                next: null,
                operation: null
            }
    }
    return state
}

export default reducer
