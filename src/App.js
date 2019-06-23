import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Articles from "./Components/Articles";
import {Link} from "react-router-dom";
import ArticleView from "./Components/ArticleView";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App(props) {
    return (
        <div className="bmwadforth">
            <div className="container">
                <div className="title">
                    <h1>Brannon Wadforth</h1>
                    <h2><span role="img" aria-label="Kangaroo">🦘</span> Australian | Software Developer | Ethical Hacker <span role="img" aria-label="Hackerman">👨‍💻</span></h2>
                </div>
                <div className="container-inner">
                    <Router>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={Articles}/>
                                <Route exact path="/article/:article" component={ArticleView}/>
                                <Route exact path="/about" component={About}/>
                                <Route exact path="/projects" component={Projects}/>
                            </Switch>
                        </div>
                        <div className="navigation">
                            <nav>
                                <Link to="/"><h1>Articles</h1></Link>
                                <Link to="/projects"><h1>Projects</h1></Link>
                                <Link to="/about"><h1>About</h1></Link>
                            </nav>
                        </div>
                    </Router>
                </div>
            </div>
        </div>
    );
}

export default App;
