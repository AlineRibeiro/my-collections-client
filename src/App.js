import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./App.css";
import "./features/snacks/SnackParent";
import SnackParent from "./features/snacks/SnackParent";
import NavBar from "./features/shared/NavBar";
import SignInForm from "./features/authentication/SignInForm";
import SignUpForm from "./features/authentication/SignUpForm";
import { CurrentUser } from "./api/CurrentUser";
import { loadUser } from "./features/authentication/userSlice";
import SnackForm from "./features/snacks/SnackForm";
import PrivateRoute from "./features/authentication/PrivateRoute";
import { CssBaseline } from "@material-ui/core";

function App() {
  const userEmail = useSelector((state) => state.user.email);

  const dispatch = useDispatch();

  const fetchCurrentUser = () => {
    CurrentUser.show().then((response) => {
      dispatch(loadUser(response));
    });
  };

  useEffect(() => {
    fetchCurrentUser();
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route exact path="/users" component={SignUpForm} />
          <Route exact path="/sign-in" component={SignInForm} />
          <Route exact path="/snacks" component={SnackParent} />
          <PrivateRoute path="/snacks/new" userEmail={userEmail}>
            <SnackForm />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
