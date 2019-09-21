import React from "react";
import PropTypes from "prop-types";
import moment from "moment"

export default function ArticleItem(props){
    function formatDescription(desc) {
        if(desc.length > 15)
            return desc.subStr(0, 15) + "...";

        return desc;
    }
    return (
        <div className="article-item">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className="article-tags">
                {props.tags.map((tag, idx) => {
                    return <span key={idx} className="article-tag">{tag}</span>
                })}
            </div>
            <sub>{moment(props.created).format("LL")}</sub>
        </div>
    )
}

ArticleItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags:  PropTypes.arrayOf(PropTypes.string),
    file: PropTypes.string,
    created: PropTypes.string
};