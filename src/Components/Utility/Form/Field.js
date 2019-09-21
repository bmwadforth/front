import React, {useState} from "react";
import PropTypes from "prop-types";

export default function Field(props){
    return (
        <div className="form-field">
            <input type={props.type} placeholder={props.placeholder} onChange={e => props.onChange(e)} value={props.value} />
        </div>
    )
}

Field.propTypes = {
    type: PropTypes.oneOf(["text", "number"]).isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any
};