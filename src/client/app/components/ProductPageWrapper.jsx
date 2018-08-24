import React , {Component} from 'react';

import ProductPage from './ProductPage.jsx';
  
class ProductPageWrapper extends Component {
  
  render() {
    
    const productsDetails = this.props.productsDetails;
    const { match: { params } } = this.props;
    const id = params.id;
    
    
    const product = productsDetails.filter(product =>{
        if (product.id == id) {
          return product;
        }
        else{
          <div className="text-center">
            <h1>The product couldn't be found.</h1>
          </div>
        }
      });

      return(
        <ProductPage
            product={product[0]} />
      );
    }     
}

export default ProductPageWrapper;