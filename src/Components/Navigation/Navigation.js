import React, {useState} from "react";
import NavLink from "./NavLink";
import {CLIENT_ROUTES} from "../../Constants";

export default function Navigation(props) {
    const [active, setActive] = useState("");

    return (
        <nav className="navigation">
            <div className="navigation-wrap">
                <ul>
                    <NavLink title="Articles" link={CLIENT_ROUTES.ARTICLES} active={active === "articles"} onClick={() => setActive("articles")} />
                    <NavLink title="Projects" link={CLIENT_ROUTES.PROJECTS} active={active === "projects"} onClick={() => setActive("projects")} />
                    <NavLink title="About Me" link={CLIENT_ROUTES.ABOUT} active={active === "about"} onClick={() => setActive("about")}/>
                </ul>
            </div>
        </nav>
    )
}