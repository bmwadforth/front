import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import {logger} from "redux-logger";
import createSaga from "redux-saga";
import rootReducer from "./Reducers/index";
import rootSaga from "./Actions";
import App from './App';
import * as serviceWorker from './serviceWorker';
import "./Assets/Styles/index.scss";

const saga = createSaga();
const store = createStore(rootReducer, applyMiddleware(saga, logger));
saga.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
