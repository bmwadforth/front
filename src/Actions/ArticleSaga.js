import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "./Http";
import {SERVER_ROUTES} from "../Constants";
import {ACTION_TYPES} from "./Types";

function* articleSaga({payload}) {
    try {
        const res = yield call(() => { return axios.get(SERVER_ROUTES.ARTICLE(payload)) });
        yield put({type: ACTION_TYPES.ARTICLE.FETCH.SUCCESS, payload: res.data});
    } catch (e) {
        if (e.response){
            yield put({type: ACTION_TYPES.ARTICLE.FETCH.FAILED, payload: e.response.data.message});
        } else {
            yield put({type: ACTION_TYPES.ARTICLE.FETCH.FAILED, payload: e.message});
        }
    }
}

export function* fetchArticle() {
    yield takeEvery(ACTION_TYPES.ARTICLE.FETCH.START, articleSaga);
}