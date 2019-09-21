import React from "react";
import PropTypes from "prop-types";
import moment from "moment"
import {Link} from "react-router-dom";
import {CLIENT_ROUTES} from "../../Constants";

export default function ArticleItem(props) {
    return (
        <div className="article-item">
            <Link to={CLIENT_ROUTES.ARTICLE(props.id)}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div className="article-tags">
                    {props.tags.map((tag, idx) => {
                        return <span key={idx} className="article-tag">{tag}</span>
                    })}
                </div>
                <sub>{moment(props.created).format("LL")}</sub>
            </Link>
        </div>
    )
}

ArticleItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
    file: PropTypes.string,
    created: PropTypes.string
};