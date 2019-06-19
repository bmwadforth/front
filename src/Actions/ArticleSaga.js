import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "./Http";
import {Api} from "./ApiRoutes";

function* articleSaga({payload}) {
    try {
        const res = yield call(() => { return axios.get(Api.Article(payload)) });
        yield put({type: "ARTICLE_FETCH_SUCCEEDED", payload: res.data});
    } catch (e) {
        yield put({type: "ARTICLE_FETCH_FAILED", payload: e.message});
    }
}

export function* fetchArticle() {
    yield takeEvery("ARTICLE_FETCH_REQUESTED", articleSaga);
}
