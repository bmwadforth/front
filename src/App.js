import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navigation from "./components/navigation";
import Dashboard from "./components/dashboard";
import Articles from "./components/articles";

export const ROUTES = {
  HOME: '/',
  ARTICLES: '/articles',
  PROJECTS: '/projects'
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <main>
            <Route exact path={ROUTES.HOME} component={Dashboard}/>
            {/*
            <Route exact path={ROUTES.ARTICLES} component={Articles}/>
            <Route exact path={ROUTES.PROJECTS} component={Articles}/>*/}
          </main>
        </Switch>
        {/*<Navigation />*/}
      </Router>
    </div>
  );
}

export default App;
