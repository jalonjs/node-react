import React from 'react'
import App from './app'
import About from './about'
import {Router, Route, hashHistory} from 'react-router'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={() => (<App name="Jalon" />)}/>
        <Route path="/about" component={About}/>
    </Router>
);
export default routes