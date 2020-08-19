import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import Navigation from './components/navigation';
import Dashboard from './components/dashboard';
import Articles from './components/articles';

export const ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  PROJECTS: '/projects',
};

function Alert({ status, title, description }) {
  return (
    <div className={`alert ${status ? `alert-${status}` : `alert-info`}`}>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
}

function NotFound({}) {
  const location = useLocation();
  return (
    <div className="not-found">
      <Alert status="warning" title="404 Not Found" description={`Path ${location.pathname} was not found.`} />
    </div>
  );
}

function App() {
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
