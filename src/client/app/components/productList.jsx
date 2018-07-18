import React from 'react';
import PropTypes from 'prop-types';

import Product from './product.jsx';

class ProductList extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.products.map(product => (
            <Product
              key={product.id}
              product={product} />
          ))
        }
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

ProductList.defaultProps = {
  products: []
};

export default ProductList;