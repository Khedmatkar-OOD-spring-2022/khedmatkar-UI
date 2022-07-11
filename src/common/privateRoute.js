import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const { user } = {user:{isAuthenticated:true}};
  if (user.isLoading) {
    return <Route {...rest} render={() => <Spinner animation="border" variant="warning" />} />;
  }
  return (
    <Route
      {...rest}
      render={props =>
        user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={{ pathname: '/login', user: { from: props.location } }} />
        )
      }
    />
  );
}

export default PrivateRoute;
