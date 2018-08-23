import React, {Component} from 'react';
import {  NavLink } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>

                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Scotch Products</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><NavLink exact activeClassName="current" to="/"> Home </NavLink></li>
                                <li><NavLink exact activeClassName="current" to="/shop"> Products </NavLink></li>
                                <li><NavLink exact activeClassName="current" to="/about"> About </NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
        
    }    
}

export default Main