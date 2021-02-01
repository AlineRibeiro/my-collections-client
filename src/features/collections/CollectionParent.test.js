import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import CollectionParent from "./CollectionParent";
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CollectionForm from "./CollectionForm";
import SignInForm from "../authentication/SignInForm";
import PrivateRoute from "../authentication/PrivateRoute";

test("renders CollectionParent component", () => {
  render(
    <Provider store={store}>
      <CollectionParent />
    </Provider>
  );
  const textElement = screen.getByText(/create a collection/i);
  expect(textElement).toBeInTheDocument();
});

test("displays CollectionForm when user is logged in", async () => {
  render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignInForm} />
        <PrivateRoute userEmail={"test@test.com"}>
          <CollectionForm />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText("Collection Name"));

  expect(screen.getByText("Create")).toBeInTheDocument();
});

test("redirects when user is not logged in", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/sign-in" component={SignInForm} />
          <PrivateRoute userEmail={""}>
            <CollectionForm />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => screen.getAllByText("Login"));

  expect(screen.getByText("Email Address")).toBeInTheDocument();
});
