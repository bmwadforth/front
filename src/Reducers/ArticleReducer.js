const initialState = {
    loading: null,
    data: {name: "", tags: [], content: {data: ""}, created: ""},
    error: null
};

export default function ArticleReducer(state = initialState, action){
    switch(action.type){
        case "ARTICLE_FETCH_REQUESTED":
            return {...state, loading: true, error: null, data: initialState.data};
        case "ARTICLE_FETCH_SUCCEEDED":
            return {...state, loading: false, data: action.payload};
        case "ARTICLE_FETCH_FAILED":
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}