import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Main from './components/Main.jsx';
import App from './components/App.jsx';
import Home from './components/Home.jsx';
import ProductList from './components/productList.jsx';
import ProductPageWrapper from './components/ProductPageWrapper.jsx';

render((
        <Router>
            <div>
                <Main>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" component={App}></Route>
                    <Route path="/shop/:id" component={ProductPageWrapper} />
                </Main>
            </div>
        </Router>
    ), document.getElementById('app')
);

/*
import Main from './common/Main.jsx'
import Home from './common/Home.jsx';
import About from './common/About.jsx';
import ProductGrid from './product/ProductsGrid.jsx';
import ProductDetails from './product/ProductDetails.jsx'

render((
    <Router>
        <div>
            <Main>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={ProductGrid} />
                
                <Route path="/products/:id" component={ProductDetails} />
                <Route path="/about" component={About} />
            </Main>   
        </div>
    </Router>
    ), document.getElementById('app')
)
*/