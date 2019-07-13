import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ArticleItem from "./ArticleItem";

export default function Articles(props) {
    const {loading, data, error} = useSelector(store => store.Articles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "ARTICLES_FETCH_REQUESTED"});
    }, [dispatch]);

    return (
        <>
            {error &&
            <h1>An Error Has Occurred <span role="img" aria-label="Error">🚫</span></h1>}

            {(!data.length && !error && !loading) &&
            <>
                <h1>No Articles Yet <span role="img" aria-label="Sad man">😥</span></h1>
                <p>There aren't any articles yet, but check back soon.</p>
            </>}
            <div className="articles">
                {data.map(article => {
                    return <ArticleItem key={article.id} name={article.name} tags={article.tags} created={article.created} />
                })}
            </div>
        </>
    )
}
