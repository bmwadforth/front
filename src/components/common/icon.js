import React from 'react';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Github } from '../../assets/icons/github.svg';
import { ReactComponent as Linkedin } from '../../assets/icons/linkedin.svg';
import { ReactComponent as Back } from '../../assets/icons/back.svg';
import { ReactComponent as Warning } from '../../assets/icons/warning.svg';
import { ReactComponent as Danger } from '../../assets/icons/error.svg';

export const ICONS = {
  INSTAGRAM: <Instagram />,
  TWITTER: <Twitter />,
  GITHUB: <Github />,
  LINKEDIN: <Linkedin />,
  BACK: <Back />,
  WARNING: <Warning />,
  DANGER: <Danger />,
};

export default function Icon({ icon, size, link, onClick }) {
  if (link) {
    return (
      <span role="img" className={`icon icon-link ${size ? `icon-${size}` : `icon-small`}`} onClick={onClick}>
        <a href={link}>{icon}</a>
      </span>
    );
  } else {
    return (
      <span role="img" className={`icon ${size ? `icon-${size}` : `icon-small`}`} onClick={onClick}>
        {icon}
      </span>
    );
  }
}
