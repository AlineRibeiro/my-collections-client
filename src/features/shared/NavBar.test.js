import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";

test("displays a login button", async () => {
  const initialState = { user: {} };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => screen.getByText("Login"));

  expect(screen.getByText("Login")).toBeInTheDocument();
  expect(screen.getByText("Register")).toBeInTheDocument();
});

test("displays a logout button", async () => {
  const initialState = { user: {email: "test@test.com", id: 1} };
  const mockStore = configureStore();
  let store = mockStore(initialState);

  render(
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>
    </Provider>
  );

  await waitFor(() => screen.getByText("Logout"));

  expect(screen.getByText("Logout")).toBeInTheDocument();
});

//email aparece
//request para current_user, a store eh atualizada? testar no app.js
