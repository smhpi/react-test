import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import ProductList from './components/productList.jsx';

render( 
    (
        <Router
            history = {browserHistory}>
            <Route
                path="/"
                component={App}>
                <IndexRoute
                    component={Home} />
                <Route
                    path="shop"
                    component={ProductList} />
            </Route>    
        </Router>
    ), document.getElementById('app')
);