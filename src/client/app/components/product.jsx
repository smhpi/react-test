import React from 'react';
import PropTypes from 'prop-types';

import { Col, Panel } from 'react-bootstrap';

function Product(props) {
  let { product } = props;

  return (
    <Col
      lg={3}
      md={4}
      sm={6}>
      <Panel className="product">
        <div className="product-img-wrapper">
          <a href="#">
            <img
              alt={product.title}
              className="img-responsive product-img"
              src={product.image.src} />
          </a>
        </div>

        <h4
          className="ellipsis"
          title={product.title}>
          <a href="#">
            {product.title}
          </a>
        </h4>

        <h5
          className="ellipsis product-brand-name"
          title={product.vendor}>
          {`by ${product.vendor}`}
        </h5>

        <div className="h4 product-price">
          {`${product.variants[0].price}$`}
        </div>
        <div className="h4 product-price">
          {`Shopify Qt:${product.variants[0].inventory_quantity}`}
        </div>
      </Panel>
    </Col>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default Product;