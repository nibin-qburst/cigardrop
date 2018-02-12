import React from 'react';
import { Route } from 'react-router-dom';


import Navbar from '../../common/components/layout/navbar';
import Sidebar from '../../common/components/layout/sidebar';

const DefaultLayout = ({component: Component, ...rest}) => {
    return (
      <Route {...rest} render={matchProps => (
        <div className="container-scroller">
        <Navbar></Navbar>
        <div className="container-fluid">
          <div className="row row-offcanvas row-offcanvas-right">
          <Sidebar></Sidebar>
          <div className="content-wrapper">
              <Component {...matchProps} />
          </div>
          </div>
      </div>
      </div>
      )} />
    )
  };

export default DefaultLayout;