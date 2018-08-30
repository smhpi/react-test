import React, { Component } from 'react';
import OktaSignIn from '@okta/okta-signin-widget';
import { Button } from 'semantic-ui-react';
import {  NavLink } from 'react-router-dom';

export default class LoginPage extends Component{
  constructor(){
    super();
    this.state = {user:null};
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-882097.oktapreview.com',
      clientId: '0oag0ueoxzIboSjLu0h7',
      redirectUri: window.location.origin + '/',
      authParams: {
        issuer: 'https://dev-882097.oktapreview.com/oauth2/default',
        responseType: ['id_token', 'token'],
        scopes: ['openid', 'email', 'profile'],
      }
    });

    this.showLogin = this.showLogin.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount(){
    this.widget.session.get((response) => {
      if(response.status !== 'INACTIVE'){
        alert("Logged in! Check your developer console for details");
        this.setState({user:response.login});
      }else{
        this.showLogin();
        
      }
    });
  }

  showLogin(){
    Backbone.history.stop();
    this.widget.renderEl({el:this.loginContainer},
      (response) => {
        this.setState({user: response.claims.email});
      },
      (err) => {
        console.log(err);
      }
    );
  }

  logout(){
    this.widget.signOut(() => {
      this.setState({user: null});
      this.showLogin();
    });
  }

  render(){
    return(
      <div>
          <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img src="../images/logo.png" style={{ maxWidth: 120 }} />
                            </a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><NavLink exact activeClassName="current" to="/"> Home </NavLink></li>
                                <li><NavLink exact activeClassName="current" to="/login"> Login </NavLink></li>
                                <li><NavLink exact activeClassName="current" to="/shop"> Products </NavLink></li>
                                <li><NavLink exact activeClassName="current" to="/report"> Reports </NavLink></li>
                            </ul>
                            {this.state.user ? (
                                <ul className="nav navbar-nav navbar-right">
                                  <li>
                                  <p className="navbar-text">{this.state.user}!</p>
                                    <Button id="login-button" primary onClick={this.logout}>Logout</Button>
                                  </li>
                                </ul> ) : null
                            }
                        </div>
                        

                    </div>
            </nav>
        {this.state.user ? (
          <div className="container">
                    {this.props.children}
          </div>
        ) : null}
        {this.state.user ? null : (
          <div ref={(div) => {this.loginContainer = div; }} />
        )}
      </div>
    );
  }
}