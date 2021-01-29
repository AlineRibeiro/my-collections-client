import React from "react";
import {render, screen, waitFor} from "@testing-library/react";

import SnackParent from "./SnackParent";
import { Provider } from "react-redux";
import store from "../../app/store";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SnackForm from "./SnackForm";
import SignInForm from "../authentication/SignInForm";
import PrivateRoute from "../authentication/PrivateRoute";

test("renders SnackParent component", () => {
  render(
    <Provider store={store}>
      <SnackParent />
    </Provider>
  );
  const textElement = screen.getByText(/create a snack/i);
  expect(textElement).toBeInTheDocument();
});

test("displays SnackForm when user clicks button to  create a snack", async () => {

  render(
      <BrowserRouter>
        <Switch>
          <Route exact path="/sign-in" component={SignInForm} />
          <PrivateRoute userEmail={'test@test.com'}>
            <SnackForm />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
  );

  await waitFor(() => screen.getByText("Snack Name"));

  expect(screen.getByText('Create')).toBeInTheDocument();
});

test("redirects when user is not logged in", async () => {

  render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/sign-in" component={SignInForm} />
          <PrivateRoute userEmail={''}>
            <SnackForm />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => screen.getAllByText("Login"));

  expect(screen.getByText('Email Address')).toBeInTheDocument();
});
