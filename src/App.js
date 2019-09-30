import React from 'react';
import Home from "./Components/Home";
import {CLIENT_ROUTES} from "./Constants";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Articles from "./Components/Articles/Articles";
import Navigation from "./Components/Navigation/Navigation";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Article from "./Components/Articles/Article";
import {ReactComponent as NotFoundVector} from "./Assets/Vectors/page-not-found-4.svg";

function NotFound(){
    return (
        <div className="not-found">
            <div className="not-found-text">
                <h1>Uh Oh.</h1>
                <h2>Sorry, I couldn't find that.</h2>
            </div>
            <div className="not-found-vector">
                <NotFoundVector/>
            </div>
        </div>
    )
}

function App() {
    return (
        <div className="bmwadforth">
            <div className="wrap">
                <Router>
                    <section className="main">
                        <Navigation/>
                        <Route exact path={CLIENT_ROUTES.HOME} component={Home}/>
                        <div className="content">
                            <Switch>
                                <Route exact path={CLIENT_ROUTES.ARTICLES} component={Articles}/>
                                <Route exact path={CLIENT_ROUTES.ARTICLE()} component={Article}/>
                                <Route exact path={CLIENT_ROUTES.PROJECTS} component={Projects}/>
                                <Route exact path={CLIENT_ROUTES.ABOUT} component={About}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </section>
                </Router>
            </div>
        </div>
    );
}

export default App;
