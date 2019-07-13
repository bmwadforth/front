const initialState = {
    loading: false,
    data: [],
    error: null
};

export default function ArticlesReducer(state = initialState, action){
    switch(action.type){
        case "ARTICLES_FETCH_REQUESTED":
            return {...state, loading: true, error: null, data: initialState.data};
        case "ARTICLES_FETCH_SUCCEEDED":
            return {...state, loading: false, data: action.payload};
        case "ARTICLES_FETCH_FAILED":
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}