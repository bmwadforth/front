import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation, useHistory } from 'react-router-dom';
import Dashboard from './components/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeta, selectMeta } from './slices/metaSlice';
import Icon, { ICONS } from './components/common/icon';
import SocialLine from './components/common/social';
import MetaLine from './components/common/metaLine';

export const ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  PROJECTS: '/projects',
};

function Alert({ status, title, description, icon, onIconClick }) {
  return (
    <div className={`alert ${status ? `alert-${status}` : `alert-info`}`}>
      {icon ? (
        <span className="title-icon">
          {icon && <Icon icon={icon} onClick={onIconClick} size="small" />}
          <h1>{title}</h1>
        </span>
      ) : (
        <h1>{title}</h1>
      )}
      {description && description}
    </div>
  );
}

function NotFound({}) {
  const history = useHistory();
  return (
    <div className="not-found">
      <Alert
        icon={ICONS.BACK}
        onIconClick={() => history.goBack()}
        status="transparent"
        title="404 Not Found"
        description={
          <div className="not-found-meta">
            <MetaLine />
          </div>
        }
      />
      <SocialLine />
    </div>
  );
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMeta());
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Dashboard} />
            {/*<Route exact path={ROUTES.ARTICLES} component={Articles} />*/}
            <Route exact component={NotFound} />
          </Switch>
        </main>
        {/*<Navigation />*/}
      </Router>
    </div>
  );
}

export default App;
