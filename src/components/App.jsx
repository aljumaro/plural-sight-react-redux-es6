import React from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p>Header here...</p>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;

