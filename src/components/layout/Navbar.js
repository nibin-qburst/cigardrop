import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';

class Navbar extends Component {
    render(){
    return(
    <nav className="navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="bg-white text-center navbar-brand-wrapper">
      <a className="navbar-brand brand-logo" href={`/`}><img alt="logo" src={logo}/></a>
     </div>
    <div className="navbar-menu-wrapper d-flex align-items-center">
      <button className="navbar-toggler navbar-toggler d-none d-lg-block navbar-dark align-self-center mr-3" type="button" data-toggle="minimize">
        <span className="navbar-toggler-icon"></span>
      </button>
      <ul className="navbar-nav ml-lg-auto d-flex align-items-center flex-row">
        <li className="nav-item">
          <Link to={`/login`} title="Logout" className="nav-link"><i className="fa fa-sign-out"></i></Link>
        </li>
      </ul>
      <button className="navbar-toggler navbar-dark navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="navbar-toggler-icon"></span>
      </button>
    </div>
  </nav>
  )
}
}

export default Navbar;