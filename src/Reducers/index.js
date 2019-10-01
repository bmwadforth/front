import {combineReducers} from "redux";
import ArticlesReducer from "./ArticlesReducer";
import AdminReducer from "./AdminReducer";
import ArticleReducer from "./ArticleReducer";

export default combineReducers({
    Article: ArticleReducer,
    Articles: ArticlesReducer,
    Admin: AdminReducer
})