import React from 'react'
import App from './app'
import About from './about'
import Hello from './hello'
import {Router, Route, browserHistory, IndexRedirect} from 'react-router'

const routes = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRedirect to="/hello"/>
            <Route path="about" component={About}/>
            <Route path="hello" component={() => (<Hello name="Jalon" />)}/>
        </Route>
    </Router>
);
export default routes