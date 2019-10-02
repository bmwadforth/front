import React from "react";
import ArticleList from "./ArticleList";

export default function Articles(props) {
    /*const [query, setQuery] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: ACTION_TYPES.ARTICLES.SEARCH.FINISH, payload: query});
    }, [query]);*/

    return (
        <div className="articles">
            {/*<Search placeholder="Search Articles" onSearch={query => {
                dispatch({type: ACTION_TYPES.ARTICLES.SEARCH.START});
                setQuery(query);
            }} />*/}
            <ArticleList/>
        </div>
    )
}