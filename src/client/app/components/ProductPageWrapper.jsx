import React from 'react';

import ProductPage from './ProductPage.jsx';

class ProductPageWrapper extends React.Component {
    
    

  render() {
      
    const product = this.props.products.find((p) => {
      return p.id === this.props.products.params.id;
    });

    return product ? (
      <ProductPage
        product={product} />
    ) : (
      <div className="text-center">
        <h1>The product couldn't be found.</h1>
      </div>
    );
  }
}

export default ProductPageWrapper;