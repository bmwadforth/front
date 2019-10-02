import { call, put, takeEvery } from 'redux-saga/effects'
import axios from "./Http";
import {SERVER_ROUTES} from "../Constants";
import {ACTION_TYPES} from "./Types";

function* loginAdminSaga({payload}) {
    try {
        const res = yield call(() => { return axios.post(SERVER_ROUTES.ADMIN_LOGIN, {...payload}) });
        yield put({type: ACTION_TYPES.ADMIN.AUTHENTICATION.SUCCESS, payload: res.data});
        if(res.data.data){
            localStorage.setItem("jwt", res.data.data);
        }
    } catch (e) {
        if (e.response){
            yield put({type: ACTION_TYPES.ADMIN.AUTHENTICATION.FAILED, payload: e.response.data.message});
        } else {
            yield put({type: ACTION_TYPES.ADMIN.AUTHENTICATION.FAILED, payload: e.message});
        }
    }
}

function* checkAuthAdminSaga(){
    if(localStorage.getItem("jwt")){
        yield put({type: ACTION_TYPES.ADMIN.AUTHENTICATION.SUCCESS, payload: localStorage.getItem("jwt")});
    } else {
        yield put({type: ACTION_TYPES.ADMIN.AUTHENTICATION.FAILED, payload: "Please Login"});
    }
}

export function* loginAdmin() {
    yield takeEvery(ACTION_TYPES.ADMIN.AUTHENTICATION.START, loginAdminSaga);
    yield takeEvery(ACTION_TYPES.ADMIN.AUTHENTICATION.CHECK, checkAuthAdminSaga);
}