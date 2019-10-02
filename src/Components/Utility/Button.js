import React from "react";
import PropTypes from "prop-types";

export default function Button(props){
    return (
        <button className={`button button-${props.status}`}>{props.title}</button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["success", "warning", "danger"]),
    onClick: PropTypes.func,
    type: PropTypes.oneOf(["submit", "button"])
};