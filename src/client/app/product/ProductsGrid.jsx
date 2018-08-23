import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import LinkStore from '../stores/LinkStore';
import API from '../lib/API';

let _getAppState = () => {
    return { links: LinkStore.getAll()}
  }

class ProductGrid extends Component{
    constructor(props){
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

    render(){
        
        const productNode = this.state.links.map((link) =>{
            return(
                <Link 
                    to={"/products/"+link.id}
                    className="list-group-item"
                    key={link.id}>
                    {link.title}
                </Link>
            )
        });
        return(
            <div>
                <h1>Products Grid</h1>
                <div className="list-group">
                    {productNode}
                </div>

            </div>
            
        )
    }
}

export default ProductGrid