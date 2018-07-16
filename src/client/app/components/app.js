import React from 'react';

import Header from './Header.js';
import Footer from './Footer.js';

import metaData  from './umbrellas.json';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      metaData
    };
  }

  render() {
    console.log(this.state);

    return (
      <div>
        <Header />
        <div id="content">
          
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
