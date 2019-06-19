import {combineReducers} from "redux";
import ArticlesReducer from "./ArticlesReducer";
import ArticleReducer from "./ArticleReducer";

export default combineReducers({Articles: ArticlesReducer, Article: ArticleReducer});