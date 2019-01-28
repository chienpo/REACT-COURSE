import * as actionTypes from '../actions';
import Big from 'big.js'

const operate = (numberOne: string, numberTwo: string, operation: string) => {
    const one = Big(numberOne || '0');
    const two = Big(numberTwo || '0');

    if (operation === '+') {
        return one.plus(two).toString();
    }
    if (operation === '-') {
        return one.minus(two).toString();
    }
    if (operation === "*") {
        return one.times(two).toString();
    }
    if (operation === "/") {
        return one.div(two).toString();
    }
    throw Error(`Unknown operation '${operation}'`);
};

const initialState = {
    total: '',
    operation: '',
    next: ''
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.NUMBERS:
            if (action.payload.buttonName === 'AC') {
                return {
                    ...state,
                    total: '',
                    operation: '',
                    next: ''
                };
            }

            if (Number(action.payload.buttonName)) {
                if (action.payload.buttonName === "0" && state.next === "0") {
                    return {
                        ...state,
                        total: '',
                        operation: '',
                        next: ''
                    };
                }
                if (state.operation) {
                    if (state.next) {
                        return {
                            ...state,
                            next: state.next + action.payload.buttonName
                        };
                    }
                    return {
                        ...state,
                        next: action.payload.buttonName
                    };
                }
                if (state.next) {
                    return {
                        ...state,
                        next: state.next + action.payload.buttonName,
                        total: '',
                    };
                }
                return {
                    ...state,
                    next: action.payload.buttonName,
                    total: '',
                };
            }

            if (action.payload.buttonName === "=") {
                if (state.next && state.operation) {
                    return {
                        ...state,
                        total: operate(state.total, state.next, state.operation),
                        next: '',
                        operation: '',
                    };
                } else {
                    return {
                        ...state
                    };
                }
            }

            if (action.payload.buttonName !== '=' || action.payload.buttonName !== Number || action.payload.buttonName !== 'AC') {
                if (state.operation) {
                    return {
                        ...state,
                        total: operate(state.total, state.next, state.operation),
                        next: '',
                        operation: action.payload.buttonName,
                    };
                }


                if (!state.next) {
                    return {
                        ...state,
                        operation: action.payload.buttonName
                    };
                }

                return {
                    ...state,
                    total: state.next,
                    next: '',
                    operation: action.payload.buttonName,
                };
            }
    }
    return state
};

export default reducer
