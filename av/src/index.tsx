import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import './index.css';
import App from './App';
import advertisementsReducer from './store/reducers/advertisements';
import authReducer from './store/reducers/auth';
import filterReducer from './store/reducers/filterAdvertisements'


const rootReduser = combineReducers({
    advertisements: advertisementsReducer,
    auth: authReducer,
    filterCars: filterReducer
});

const store = createStore(rootReduser, composeWithDevTools(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App children isAuth />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
