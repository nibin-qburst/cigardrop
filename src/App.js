import React, { Component } from 'react';
import './App.css';
import './assets/css/bootstrap.min.css'

import Home from './components/Home';
import Login from './components/Login';
import Checkout from './components/Checkout';
import Confirmation from './components/Confirmation';

import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';

const AuthLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="container-fluid">
      <div className="row">
        <div className="content-wrapper full-page-wrapper d-flex align-items-center auth-pages">
          <Component {...matchProps} />
        </div>
      </div>
    </div>
    )} />
  )
};

const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="container-scroller">
      <Navbar></Navbar>
      <div className="container-fluid">
        <Sidebar></Sidebar>
        <div className="content-wrapper">
            <Component {...matchProps} />
        </div>
    </div>
    </div>
    )} />
  )
};

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Switch>  
              <AuthLayout path='/login' component={Login} />
              <DefaultLayout exact path='/dashboard' component={Home} />
              <DefaultLayout path='/checkout' component={Checkout} />
              <DefaultLayout path='/confirmation' component={Confirmation} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
