import React , {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import API from '../lib/API';
import LinkStore from '../stores/LinkStore';
import LoginPage from './auth/LoginPage.jsx';
import Home from './Home.jsx';
import ProductList from './productList.jsx';
import ProductPageWrapper from './ProductPageWrapper.jsx';
import Report from './Report.jsx';

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
        <Router>
                <LoginPage>
                    <Route exact={true} path="/" component={Home} />
                    <Route  path="/shop/" render={ () => <ProductList 
                                          products = {this.state.links}
                                          /> } />
                    <Route  path="/shop/:id" component={ProductPageWrapper} />
                    <Route  path="/report/" component={Report} />
                </LoginPage>
        </Router>
    );
  }
}

export default App;