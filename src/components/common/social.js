import React from 'react';
import Icon, { ICONS } from './icon';

export default function SocialLine() {
  return (
    <div className="social-line">
      <span className="social-icons">
        <Icon icon={ICONS.GITHUB} link="https://github.com/fntmx" size="small" />
        <Icon icon={ICONS.LINKEDIN} link="https://www.linkedin.com/in/brannon-wadforth-959b06120/" size="small" />
      </span>
    </div>
  );
}
