import {combineReducers} from "redux";
import ArticlesReducer from "./ArticlesReducer";
import AdminReducer from "./AdminReducer";

export default combineReducers({
    Articles: ArticlesReducer,
    Admin: AdminReducer
})