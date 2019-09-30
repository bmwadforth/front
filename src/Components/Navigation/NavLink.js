import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function NavLink(props) {
    return (
        <li className={`${props.active ? "active" : "inactive"}`} onClick={() => {props.onClick(props.link)}}>
            <Link to={props.link}>
                {props.title}
            </Link>
        </li>
    )
}

NavLink.propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    link :PropTypes.string.isRequired,
};