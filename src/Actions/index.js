import {all} from "redux-saga/effects";
import {fetchArticles} from "./ArticlesSaga";
import {fetchArticle} from "./ArticleSaga";

export default function* rootSaga(){
    yield all([
        fetchArticles(),
        fetchArticle()
    ]);
};