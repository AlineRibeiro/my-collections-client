import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, userEmail, ...rest }) => {
  return (
    <Route
      {...rest}
      render={location =>
        userEmail ? children : <Redirect to='/sign-in' />
      }
    />
  );
};

export default PrivateRoute;