import React, {useState} from "react";
import PropTypes from "prop-types";
import Button from "../Button";

export default function WebForm(props){
    return (
        <div className="web-form">
            <form onSubmit={e => props.onSubmit}>
                {props.children}
                <Button title="Submit" status="warning" type="submit"/>
            </form>
        </div>
    )
}

WebForm.propTypes = {

};