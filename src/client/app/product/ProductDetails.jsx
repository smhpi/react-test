import React , { Component } from 'react';

import LinkStore from '../stores/LinkStore';
import API from '../lib/API';

let _getAppState = () => {
    return { links: LinkStore.getAll()}
  }

class ProductDetails extends Component{
    constructor(props){
        super(props);

        this.state = _getAppState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        
        API.fetchLink();
        LinkStore.on("change" , this.onChange);
        

    }

    componentWillMount(){
        LinkStore.removeAllListeners("change", this.onChange);
    }
    
    onChange() {
        console.log("4- in the view");
        this.setState(_getAppState());
    }

    render(){
        const products = this.state.links;
        const { match: { params } } = this.props;
        const id = params.id;

        const product = products.filter(product => {
            if (product.id == id) {
                return product;
            }
        });

        return(
            <div>
                <h1>{product[0].title}</h1>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={product[0].image.src} alt={product[0].title} />
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4">
                       <ul>
                           <li><strong>Title</strong>: {product[0].title}</li>
                           <li><strong>Make</strong>: {product[0].vendor}</li>
                           <li><strong>Price</strong>: {product[0].variants[0].price}</li>
                       </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails