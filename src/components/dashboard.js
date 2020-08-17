import React from 'react';
import Icon, {ICONS} from "./common/icon";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <h1 className="title">Brannon Wadforth</h1>
            <p className="credentials">Australian <span aria-label="Australia" role="img">🇦🇺</span>. Professional
                software consultant. Information security connoisseur. Aspiring cyber security professional. I will hack you if you ask me to.</p>
            <span className="social-icons">
                <Icon icon={ICONS.TWITTER} link="https://twitter.com/bmwadforth" size="small"/>
                <Icon icon={ICONS.INSTAGRAM} link="https://instagram.com/bmwadforth" size="small"/>
                <Icon icon={ICONS.GITHUB} link="https://github.com/bmwadforth" size="small"/>
            </span>
        </div>
    )
}