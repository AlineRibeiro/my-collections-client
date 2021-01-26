import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./NavBar";

const server = setupServer(
  rest.get("/current_user", (req, res, ctx) => {
    return res(
      ctx.json({ error: "You need to sign in or sign up before continuing." })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
