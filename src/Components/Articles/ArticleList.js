import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPES} from "../../Actions/Types";
import Alert from "../Utility/Alert";
import ArticleItem from "./ArticleItem";

export default function ArticleList() {
    const dispatch = useDispatch();
    const {loading, fetched, data, error} = useSelector(state => state.Articles);

    useEffect(() => {
        dispatch({type: ACTION_TYPES.ARTICLES.FETCH.START});
    }, [dispatch]);

    return (
        <>
            {loading && <Alert title="Loading" status="warning"/>}
            {error && <Alert title={error} status="danger"/>}
            {(!data.length && fetched) && <Alert title="No Articles" status="warning"/>}
            <div className="article-list">
                {data.map(article => {
                    return <ArticleItem
                        key={article.id}
                        id={article.id}
                        title={article.title}
                        description={article.description}
                        tags={article.tags}
                        file={article.fieRef}
                        created={article.created}/>
                })}
            </div>
        </>
    )
}