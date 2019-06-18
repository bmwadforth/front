import {all} from "redux-saga/effects";
import {fetchArticles} from "./ArticlesSaga";

export default function* rootSaga(){
    yield all([
        fetchArticles(),
    ]);
};