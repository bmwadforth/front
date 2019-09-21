import React, {useState} from "react";
import Search from "../Utility/Search";
import ArticleList from "./ArticleList";

export default function Articles(props) {
    const [query, setQuery] = useState("");
    return (
        <div className="articles">
            <Search placeholder="Search Articles" onSearch={query => {

            }} />
            <ArticleList/>
        </div>
    )
}