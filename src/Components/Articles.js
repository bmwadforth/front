import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ArticleItem from "./ArticleItem";

export default function ArticlesComponent(props) {
    const {loading, data, error} = useSelector(store => store.Articles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "ARTICLES_FETCH_REQUESTED"});
    }, []);

    return (
        <div className="articles">
            {data.map(article => {
                return <ArticleItem key={article.id} name={article.name} tags={article.tags} created={article.created} />
            })}
        </div>
    )
}
