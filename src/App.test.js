import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "./app/store";
import { setupServer } from "msw/node";
import { rest } from "msw";
import App from "./App";

const server = setupServer(
  rest.get("/current_user", (req, res, ctx) => {
    return res(ctx.json({ email: "test@test.com", id: 1 }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());

test("loads the current user", async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  await waitFor(() => screen.getByText("Logout"));

  const userSlice = store.getState().user;

  expect(userSlice.email).toEqual("test@test.com");
});
