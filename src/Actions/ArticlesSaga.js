import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "./Http";
import {Api} from "./ApiRoutes";

function* articlesSaga() {
    try {
        const res = yield call(() => { return axios.get(Api.Articles) });
        yield put({type: "ARTICLES_FETCH_SUCCEEDED", payload: res.data});
    } catch (e) {
        yield put({type: "ARTICLES_FETCH_FAILED", payload: e.message});
    }
}

export function* fetchArticles() {
    yield takeEvery("ARTICLES_FETCH_REQUESTED", articlesSaga);
}
