import React , {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';

import API from '../lib/API';
import LinkStore from '../stores/LinkStore';
import ProductList from './productList.jsx';
import ProductPageWrapper from './ProductPageWrapper.jsx';
import Home from './Home.jsx';
import Main from './Main.jsx';


let _getAppState = () => {
  return { links: LinkStore.getAll()}
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = _getAppState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    API.fetchLink();
    LinkStore.on("change" , this.onChange)
}

componentWillMount(){
    LinkStore.removeAllListeners("change", this.onChange);
}

onChange() {
    console.log("4- in the view");
    this.setState(_getAppState());
}

  render() {
    return (
      <div>
        <Router>
            <div>
                <Main>
                    <Route exact path="/" component={Home} />
                    <Route path="/shop" render={ () => <ProductList 
                                          products = {this.state.links}
                                          /> } ></Route>
                    <Route path="/shop/:id" render={ () => <ProductPageWrapper
                                                productDetail={this.state.links} />
                                              } />
                </Main>
            </div>
        </Router>
      </div>
    );
  }
}

export default App;