import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import LandingPage from "views/LandingPage.js";
// others
import './i18n';

ReactDOM.render(
    <Suspense fallback={null}>
        <BrowserRouter>
            <Switch>
                <Route
                    path="/"
                    render={(props) => <LandingPage {...props} />}
                />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>,
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
