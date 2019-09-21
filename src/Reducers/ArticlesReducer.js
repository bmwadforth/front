import {ACTION_TYPES} from "../Actions/Types";

const initialState = {
    loading: false,
    data: [],
    error: null
};

export default function ArticlesReducer(state = initialState, action){
    switch(action.type){
        case ACTION_TYPES.ARTICLES.FETCH.START:
            return {
                ...state,
                loading: true,
                error: null
            };
        case ACTION_TYPES.ARTICLES.FETCH.SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case ACTION_TYPES.ARTICLES.FETCH.FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return {...state}
    }
}