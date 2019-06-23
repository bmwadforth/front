import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";

export default function ArticleView(props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: "ARTICLE_FETCH_REQUESTED", payload: props.match.params.article});
    }, [dispatch, props.match.params.article]);

    const {loading, data} = useSelector(store => store.Article);

    return (
        <div className="article-view">
            {loading ? <h1>Loading</h1> :
                <>
                    <div className="article-title">
                        <h1>{data.name}</h1>
                        <p>Published {moment(data.created).format("DD/MM/YYYY")}</p>
                        {data.tags.map((tag, idx) => {
                            return <sub key={idx}>{tag}</sub>
                        })}
                    </div>
                    <div className="article-content">
                    </div>
                </>
            }
        </div>
    );
}