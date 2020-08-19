import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from '../App';

function NavigationItem({ active, title, link, onClick }) {
  return (
    <li className={`navigation-item ${active ? 'item-active' : 'item-inactive'}`} onClick={onClick}>
      <Link to={link}>{title}</Link>
    </li>
  );
}

export default function Navigation() {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  return (
    <aside className="navigation-container">
      <ol className="navigation-group">
        <NavigationItem
          active={active === ROUTES.HOME}
          title={
            <>
              Bmwadforth<b>dot</b>com<span>🇦🇺</span>
            </>
          }
          link={ROUTES.HOME}
          onClick={() => setActive(ROUTES.HOME)}
        />
        <NavigationItem
          active={active === ROUTES.ARTICLES}
          title={'Articles'}
          link={ROUTES.ARTICLES}
          onClick={() => setActive(ROUTES.ARTICLES)}
        />
        <NavigationItem
          active={active === ROUTES.PROJECTS}
          title={'Projects'}
          link={ROUTES.PROJECTS}
          onClick={() => setActive(ROUTES.PROJECTS)}
        />
      </ol>
      <hr />
      <span className="navigation-social"></span>
    </aside>
  );
}
