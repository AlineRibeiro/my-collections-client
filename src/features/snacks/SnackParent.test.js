import React from "react";
import { render, screen } from "@testing-library/react";

import SnackParent from "./SnackParent";
import {Provider} from "react-redux";
import store from "../../app/store";


test("renders learn react link", () => {
  render( <Provider store={store}><SnackParent /></Provider>);
  const textElement = screen.getByText(/create a snack/i);
  expect(textElement).toBeInTheDocument();
});
