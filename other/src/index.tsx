import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'

import calculateReducer from './store/reducers/calculate'
import App from './App';

const rootReducer = combineReducers({
    calc: calculateReducer
})

const store = createStore(rootReducer);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'))