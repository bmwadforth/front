import React from 'react';
import {ReactComponent as Instagram} from '../../assets/icons/instagram.svg'
import {ReactComponent as Twitter} from '../../assets/icons/twitter.svg'
import {ReactComponent as Github} from '../../assets/icons/github.svg'

export const ICONS = {
    INSTAGRAM: <Instagram/>,
    TWITTER: <Twitter/>,
    GITHUB: <Github/>
}

export default function Icon({icon, size, link}) {
    if (link) {
        return <span role="img" className={`icon icon-link ${size ? `icon-${size}` : `icon-small`}`}><a
            href={link}>{icon}</a></span>
    } else {
        return <span role="img" className={`icon ${size ? `icon-${size}` : `icon-small`}`}>{icon}</span>
    }
}