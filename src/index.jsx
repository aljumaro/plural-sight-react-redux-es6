import React from "react";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import "./styles/styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
import configureStore from './store/configureStore';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from "./actions/authorActions";

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));
