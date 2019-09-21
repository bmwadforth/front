import React from 'react';
import Home from "./Components/Home";
import {CLIENT_ROUTES} from "./Constants";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Articles from "./Components/Articles/Articles";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Article from "./Components/Articles/Article";

function App() {
    return (
        <div className="bmwadforth">
            <div className="wrap">
                <Router>
                    <>
                        <Navigation/>
                        <section className="main">
                            <div className="content">
                                <Switch>
                                    <Route exact path={CLIENT_ROUTES.HOME} component={Home}/>
                                    <Route exact path={CLIENT_ROUTES.ARTICLES} component={Articles}/>
                                    <Route exact path={CLIENT_ROUTES.ARTICLE()} component={Article}/>
                                    <Route exact path={CLIENT_ROUTES.PROJECTS} component={Projects}/>
                                    <Route exact path={CLIENT_ROUTES.ABOUT} component={About}/>
                                </Switch>
                            </div>
                        </section>
                    </>
                </Router>
            </div>
        </div>
    );
}

export default App;
