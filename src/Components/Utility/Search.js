import React, {useState} from "react";
import PropTypes from "prop-types";
import Field from "./Form/Field";

export default function Search(props){
    const [query, setQuery] = useState("");

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