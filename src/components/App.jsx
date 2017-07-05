import React from "react";
import { Switch, Route } from 'react-router-dom';
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import CoursesPage from "./course/CoursesPage";
import ManageCoursesPage from "./course/ManageCoursesPage";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/courses" component={CoursesPage}/>
                    <Route path="/courses/new" component={ManageCoursesPage}/>
                    <Route path="/courses/:id" component={ManageCoursesPage}/>
                    <Route path="/about" component={AboutPage}/>
                </Switch>
            </div>
        );
    }
}

export default App;

