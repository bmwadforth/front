import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function NavLink(props) {
    return (
        <li className={`${props.active ? "active" : "inactive"}`} onClick={e => props.onClick(e)}>
            <Link to={props.link}>
                {props.title}
            </Link>
        </li>
    )
}

NavLink.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired
};