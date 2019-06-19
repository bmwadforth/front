import React from "react";
import moment from "moment";
import slugify from "slugify";
import {Link} from "react-router-dom";

export default function ArticleItem(props){
    return (
        <Link to={`/article/${slugify(props.name)}`}>
            <div className="article-item">
                <h1>{props.name}</h1>
                {props.tags.map((tag, idx) => {
                    return <sub key={idx}>{tag}</sub>
                })}
                <p>Published {new moment(props.created).format("DD/MM/YYYY")}</p>
            </div>
        </Link>
    )
}