import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../../App';

function NavigationItem({ active, title, link, onClick }) {
  return (
    <li className={`navigation-item ${active ? 'item-active' : 'item-inactive'}`} onClick={onClick}>
      <Link to={link}>{title}</Link>
    </li>
  );
}

export default function NavigationLine() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <nav className="navigation-container">
      <div className="navigation">
        <NavigationItem
          title={
            <>
              Bmwadforth<b>dot</b>com
            </>
          }
          link={ROUTES.HOME}
          active={active === ROUTES.HOME}
          onClick={() => setActive(ROUTES.HOME)}
        />
        <NavigationItem
          title="Articles"
          link={ROUTES.ARTICLES}
          active={active === ROUTES.ARTICLES}
          onClick={() => setActive(ROUTES.ARTICLES)}
        />
        <NavigationItem
          title="Projects"
          link={ROUTES.PROJECTS}
          active={active === ROUTES.PROJECTS}
          onClick={() => setActive(ROUTES.PROJECTS)}
        />
      </div>
    </nav>
  );
}
