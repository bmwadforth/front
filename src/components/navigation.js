import React from 'react';
import {Link} from 'react-router-dom';
import {ROUTES} from "../App";

function NavigationItem({title, link}) {
    return (
        <li className='navigation-item'>
            <Link to={link}>{title}</Link>
        </li>
    )
}

export default function Navigation() {
    return (
        <aside className='navigation-container'>
            <ol className='navigation-group'>
                <NavigationItem title={<>Bmwadforth<b>dot</b>com<span>🇦🇺</span></>} link={ROUTES.HOME} />
                <NavigationItem title={'Articles'} link={ROUTES.ARTICLES} />
            </ol>
        </aside>
    )
}