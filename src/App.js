import React from 'react';
import Home from "./Components/Home";
import {CLIENT_ROUTES} from "./Constants";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Articles from "./Components/Articles/Articles";
import Navigation from "./Components/Navigation/Navigation";
import About from "./Components/About";
import Article from "./Components/Articles/Article";
import {ReactComponent as NotFoundVector} from "./Assets/Vectors/page-not-found-4.svg";
import Admin from "./Components/Admin/Admin";

function NotFound() {
    return (
        <div className="not-found">
            <div className="not-found-text">
                <h1>Uh Oh.</h1>
                <h2>Sorry, that doesn't exist anymore, or maybe it never did.</h2>
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
                <section className="main">
                    <Router>
                        <Navigation/>
                        <div className="content">
                            <Switch>
                                <Route exact path={CLIENT_ROUTES.HOME} component={Home}/>
                                <Route path={CLIENT_ROUTES.ARTICLES} component={Articles}/>
                                <Route path={CLIENT_ROUTES.ARTICLE()} component={Article}/>
                                {/*<Route exact path={CLIENT_ROUTES.PROJECTS} component={Projects}/>*/}
                                <Route path={CLIENT_ROUTES.ABOUT} component={About}/>
                                <Route path={CLIENT_ROUTES.ADMIN} component={Admin}/>
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </Router>
                </section>
            </div>
        </div>
    );
}

export default App;
