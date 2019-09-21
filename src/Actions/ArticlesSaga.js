import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "./Http";
import {SERVER_ROUTES} from "../Constants";
import {ACTION_TYPES} from "./Types";

function* articlesSaga() {
    try {
        const res = yield call(() => { return axios.get(SERVER_ROUTES.ARTICLES) });
        yield put({type: ACTION_TYPES.ARTICLES.FETCH.SUCCESS, payload: res.data});
    } catch (e) {
        if (e.response){
            yield put({type: ACTION_TYPES.ARTICLES.FETCH.FAILED, payload: e.response.data.message});
        } else {
            yield put({type: ACTION_TYPES.ARTICLES.FETCH.FAILED, payload: e.message});
        }
    }
}

export function* fetchArticles() {
    yield takeEvery(ACTION_TYPES.ARTICLES.FETCH.START, articlesSaga);
}