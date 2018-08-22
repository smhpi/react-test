import React from 'react';
import { render } from 'react-dom';
import { IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import ProductList from './components/productList.jsx';
import ProductPageWrapper from './components/ProductPageWrapper.jsx';

render((
        <Router>
            <div>
            <Route
                path="/"
                component={Home} />

            <Route path="/shop" component={App}></Route>
                <Route path="/shop/:id" component={ProductPageWrapper} />
            
            
            </div> 
        </Router>
    ), document.getElementById('app')
);