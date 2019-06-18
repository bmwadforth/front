import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ArticlesComponent from "./Components/Articles";
import {Link} from "react-router-dom";

function App() {
    return (
        <div className="bmwadforth">
            <div className="container">
                <div className="title">
                    <h1>Brannon Wadforth</h1>
                    <h2>Software Developer | Ethical Hacker 👨‍💻 </h2>
                </div>
                <div className="container-inner">
                    <Router>
                        <div className="content">
                            <Switch>
                                <Route exact path="/" component={ArticlesComponent}/>
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
