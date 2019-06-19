const initialState = {
    loading: false,
    data: {},
    err: null
};

export default function ArticleReducer(state = initialState, action){
    switch(action.type){
        case "ARTICLE_FETCH_REQUESTED":
            return {...state, loading: true};
        case "ARTICLE_FETCH_SUCCEEDED":
            return {...state, loading: false, data: action.payload};
        case "ARTICLE_FETCH_FAILED":
            return {...state, loading: false, err: action.payload};
        default:
            return state;
    }
}