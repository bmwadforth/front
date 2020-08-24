import React from 'react';
import Icon, { ICONS } from './icon';

export default function SocialLine() {
  return (
    <div className="social-line">
      <span className="social-icons">
        <Icon icon={ICONS.TWITTER} link="https://twitter.com/bmwadforth" size="small" />
        <Icon icon={ICONS.INSTAGRAM} link="https://instagram.com/bmwadforth" size="small" />
        <Icon icon={ICONS.GITHUB} link="https://github.com/bmwadforth" size="small" />
        <Icon icon={ICONS.LINKEDIN} link="https://www.linkedin.com/in/brannon-wadforth-959b06120/" size="small" />
      </span>
    </div>
  );
}
