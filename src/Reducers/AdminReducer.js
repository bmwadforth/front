import {combineReducers} from "redux";
import {ACTION_TYPES} from "../Actions/Types";

const initialAuthState = {
    loading: false,
    authenticated: false,
    error: null
};

function AuthenticationReducer(state = initialAuthState, action){
    switch(action.type){
        case ACTION_TYPES.ADMIN.AUTHENTICATION.CHECK:
            return {
                ...state,
                loading: true,
            };
        case ACTION_TYPES.ADMIN.AUTHENTICATION.START:
            return {
                ...state,
                loading: true,
                authenticated: false,
                error: null
            };
        case ACTION_TYPES.ADMIN.AUTHENTICATION.SUCCESS:
            return {
                ...state,
                loading: false,
                authenticated: true,
            };
        case ACTION_TYPES.ADMIN.AUTHENTICATION.FAILED:
            return {
                ...state,
                loading: false,
                authenticated: false,
                error: action.payload
            };
        default:
            return {...state}
    }
}

const initialNewArticleState = {
    error: null
};

function NewArticleReducer(state = initialNewArticleState, action){
    switch(action.type){

        default:
            return {...state}
    }
}

const initialModifyArticleState = {
    error: null
};

function ModifyArticleReducer(state = initialModifyArticleState, action){
    switch(action.type){

        default:
            return {...state}
    }
}

export default combineReducers({
    Authentication: AuthenticationReducer,
    NewArticle: NewArticleReducer,
    ModifyArticle: ModifyArticleReducer
})