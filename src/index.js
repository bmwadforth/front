import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import rootReducer from "./Reducers/index";
import rootSaga from "./Actions/index";
import createSaga from "redux-saga";
import * as serviceWorker from './serviceWorker';
import App from './App';
import "./Assets/index.scss"

const saga = createSaga();
const store = createStore(rootReducer, applyMiddleware(saga, logger));
saga.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
