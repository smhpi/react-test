import React from 'react';
import PropTypes from 'prop-types';
import Product from './product.jsx';

import { Col, Clearfix } from 'react-bootstrap';

const PAGE_SIZE = 24;

class ProductList extends React.Component {


  render() {


    return (
      <div>
        

        <Clearfix />
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