import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import ProductList from './productList.jsx';
import API from '../lib/API';
import LinkStore from '../stores/LinkStore';

import { Grid } from 'react-bootstrap';

let _getAppState = () => {
  return { links: LinkStore.getAll()}
}

class App extends React.Component {
  constructor(props) {
    super(props);

   /* this.state = {
      rowData: products
    }; */

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
        <Header />
        <Grid id="content">
        <ProductList
          products={this.state.links} />
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;