import {ACTION_TYPES} from "../Actions/Types";

const initialState = {
    loading: false,
    fetched: false,
    data: {
        title: "",
        description: "",
        tags: []
    },
    error: null
};

export default function ArticleReducer(state = initialState, action){
    switch(action.type){
        case ACTION_TYPES.ARTICLE.FETCH.START:
            return {
                ...state,
                loading: true,
                fetched: false,
                error: null
            };
        case ACTION_TYPES.ARTICLE.FETCH.SUCCESS:
            return {
                ...state,
                loading: false,
                fetched: true,
                data: action.payload.data
            };
        case ACTION_TYPES.ARTICLE.FETCH.FAILED:
            return {
                ...state,
                loading: false,
                fetched: false,
                error: action.payload
            };
        default:
            return {...state}
    }
}