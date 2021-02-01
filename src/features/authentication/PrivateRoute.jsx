import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ children, userEmail, ...props }) => {
  return (
    <Route
      {...props}
      render={() => (userEmail ? children : <Redirect to="/sign-in" />)}
    />
  );
};

export default PrivateRoute;
