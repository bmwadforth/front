import React from "react";
import moment from "moment";

export default function ArticleItem(props){
    return (
        <div className="article-item">
            <h1>{props.name}</h1>
            {props.tags.map((tag, idx) => {
                return <sub key={idx}>{tag}</sub>
            })}
            <p>Published {new moment(props.created).format("DD/MM/YYYY")}</p>
        </div>
    )
}