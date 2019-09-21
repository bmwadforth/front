import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import Field from "./Form/Field";
import WebForm from "./Form/WebForm";

export default function Search(props){
    const [query, setQuery] = useState("");

    useEffect(() => {
        //Do something maybe lol
    }, [query]);

    return (
        <div className="search-bar">
            <Field type="text" onChange={(e) => {
                setQuery(e.target.value);
                props.onSearch(e.target.value);
            }} value={query} placeholder={props.placeholder}/>
        </div>
    )
}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};