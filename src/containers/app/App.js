import React, { Component } from 'react';
import './App.css';
import '../../assets/css/bootstrap.min.css'

import Home from '../../components/home';
import Login from '../../components/login';
import Checkout from '../../components/checkout';
import Confirmation from '../../components/confirmation';

import AuthLayout from '../auth';
import DefaultLayout from '../main';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Switch>  
              <Route exact path="/" render={() => (<Redirect to="/login" />)} /> 
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
