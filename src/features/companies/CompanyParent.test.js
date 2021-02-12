import React from "react";
import { render, screen, waitFor } from "@testing-library/react";

import CompanyParent from "./CompanyParent";
import { Provider } from "react-redux";
import store from "../../app/store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CompanyForm from "./CompanyForm";
import SignInForm from "../authentication/SignInForm";
import PrivateRoute from "../authentication/PrivateRoute";

test("renders CompanyParent component", () => {
  render(
    <Provider store={store}>
      <CompanyParent />
    </Provider>
  );
  const textElement = screen.getByText(/create a company/i);
  expect(textElement).toBeInTheDocument();
});

test("displays CompanyForm when user is logged in", async () => {
  render(
    <BrowserRouter>
      <Switch>
        <Route exact path="/sign-in" component={SignInForm} />
        <PrivateRoute userEmail={"test@test.com"}>
          <CompanyForm />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );

  await waitFor(() => screen.getByText("Company Name"));

  expect(screen.getByText("Create")).toBeInTheDocument();
});

test("redirects when user is not logged in", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/sign-in" component={SignInForm} />
          <PrivateRoute userEmail={""}>
            <CompanyForm />
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => screen.getAllByText("Login"));

  expect(screen.getByText("Email Address")).toBeInTheDocument();
});
