import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Articles from './components/articles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMeta, selectMeta } from './slices/metaSlice';

export const ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  PROJECTS: '/projects',
};

function Alert({ status, title, description }) {
  return (
    <div className={`alert ${status ? `alert-${status}` : `alert-info`}`}>
      <h1>{title}</h1>
      {description && description}
    </div>
  );
}

function NotFound({}) {
  const location = useLocation();
  const data = useSelector(selectMeta);
  console.log(data);
  return (
    <div className="not-found">
      <Alert
        status="warning"
        title="404 Not Found"
        description={
          <div>
            <p>{`Path ${location.pathname} was not found.`}</p>
            <br />
            <sub>
              <p>
                Connection from {data.colo}, {data.loc}
              </p>
              <p>User agent: {data.uag}</p>
              <p>Internet Protocol Address: {data.ip}</p>
            </sub>
          </div>
        }
      />
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
            <Route exact component={NotFound} />
          </Switch>
        </main>
        {/*<Navigation />*/}
      </Router>
    </div>
  );
}

export default App;
