import React from "react";
import PropTypes from "prop-types";

export default function Alert(props){
    return (
        <div className={`alert alert-${props.status}`}>

        </div>
    )
}

Alert.propTypes = {
    status: PropTypes.oneOf(["primary", "success", "warning", "danger"])
};