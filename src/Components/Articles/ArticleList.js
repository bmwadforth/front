import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPES} from "../../Actions/Types";

export default function ArticleList(props) {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.Articles);

    useEffect(() => {
        dispatch({type: ACTION_TYPES.ARTICLES.FETCH.START});
    }, []);

    return (
        <div className="article-list">

        </div>
    )
}