import React, {useState} from "react";
import NavLink from "./NavLink";
import {CLIENT_ROUTES} from "../../Constants";

export default function Navigation(props) {
    const [active, setActive] = useState(window.location.pathname);

    return (
        <>
            <nav className="navigation">
                <div className="navigation-wrap">
                    <ul>
                        <NavLink title="Bmwadforth" link={CLIENT_ROUTES.HOME} active={active === CLIENT_ROUTES.HOME} onClick={(link) => setActive(link)} />
                        <NavLink title="Articles" link={CLIENT_ROUTES.ARTICLES} active={active === CLIENT_ROUTES.ARTICLES} onClick={link => setActive(link)} />
                        <NavLink title="Projects" link={CLIENT_ROUTES.PROJECTS} active={active === CLIENT_ROUTES.PROJECTS} onClick={link => setActive(link)} />
                        <NavLink title="About Me" link={CLIENT_ROUTES.ABOUT} active={active === CLIENT_ROUTES.ABOUT} onClick={link => setActive(link)} />
                    </ul>
                </div>
            </nav>
        </>
    )
}