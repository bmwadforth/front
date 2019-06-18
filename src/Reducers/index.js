import {combineReducers} from "redux";
import ArticlesReducer from "./ArticlesReducer";

export default combineReducers({Articles: ArticlesReducer});