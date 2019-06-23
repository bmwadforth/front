import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

export default function ArticleView(props){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "ARTICLE_FETCH_REQUESTED", payload: props.match.params.article});
    }, [dispatch, props.match.params.article]);

    const {data} = useSelector(store => store.Article);

    return (
        <div className="article-view">
            <h1>{data.name}</h1>
        </div>
    );
}