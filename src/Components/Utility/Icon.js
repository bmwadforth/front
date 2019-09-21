import React from "react";
import PropTypes from "prop-types";

import {ReactComponent as Primary} from "../../Assets/Icons/error.svg";
import {ReactComponent as Success} from "../../Assets/Icons/success.svg";
import {ReactComponent as Warning} from "../../Assets/Icons/warning.svg";
import {ReactComponent as Error} from "../../Assets/Icons/error.svg";

export const ICONS = {
    PRIMARY: <Primary/>,
    SUCCESS: <Success/>,
    WARNING: <Warning/>,
    ERROR: <Error/>
};

export default function Icon(props){
    return (
        <span className="icon">{props.icon}</span>
    )
}

Icon.propTypes = {
    icon: PropTypes.object.isRequired
};