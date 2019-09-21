import React from "react";
import PropTypes from "prop-types";
import Icon, {ICONS} from "./Icon";

export default function Alert(props){
    function loadIcon(){
        switch(props.status){
            case "primary":
                return ICONS.PRIMARY;
            case "success":
                return ICONS.SUCCESS;
            case "warning":
                return ICONS.WARNING;
            case "danger":
                return ICONS.ERROR;
            default:
                return <></>;
        }
    }
    return (
        <div className="alert-wrap">
            <div className={`alert alert-${props.status}`}>
                <p><Icon icon={loadIcon()}/>{props.title}</p>
            </div>
        </div>
    )
}

Alert.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf(["primary", "success", "warning", "danger"])
};