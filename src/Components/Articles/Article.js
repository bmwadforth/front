import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ACTION_TYPES} from "../../Actions/Types";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import CodeBlock from "../Utility/CodeBlock";

export default function Article(props){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({type: ACTION_TYPES.ARTICLE.FETCH.START, payload: props.match.params.id})
    }, []);

    const {data} = useSelector(store => store.Article);

    return (
        <div className="article">
            <div className="article-title">
                <h1>{data.title}</h1>
                <p>{data.description}</p>
                <div className="article-tags">
                    {data.tags.map((tag, idx) => {
                        return <span key={idx} className="article-tag">{tag}</span>
                    })}
                </div>
                <sub>{moment(data.created).format("LL")}</sub>
            </div>
            <div className="article-content">
                <ReactMarkdown source={data.fileContent} renderers={{code: CodeBlock}} />
            </div>
        </div>
    )
}