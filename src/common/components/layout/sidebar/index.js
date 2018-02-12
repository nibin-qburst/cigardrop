import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return(
            <div>
        <nav className="bg-white sidebar sidebar-offcanvas" id="sidebar">
          <div className="user-info">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt=""/>
            <p className="name">Alexis S</p>
            <p className="designation">Last Login: 10/08/2018</p>
          </div>
          <ul className="nav">
            <li className="nav-item">
            <NavLink to={`/dashboard`} activeClassName="active"  className="nav-link">
                <i className="fa fa-tachometer"></i>
                <span className="menu-title">Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink to={`/checkout`}  activeClassName="active" className="nav-link">
              <i className="fa fa-shopping-cart"></i>
                <span className="menu-title">Checkout</span>
            </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={`/confirmation`}  activeClassName="active" className="nav-link">
              <i className="fa fa-check-square"></i>
                <span className="menu-title">Order Review</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        </div>
        )
    }
}

export default Sidebar; 


