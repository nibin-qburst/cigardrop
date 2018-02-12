import React from 'react';
import { Route } from 'react-router-dom';

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

  export default AuthLayout;