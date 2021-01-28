import React from "react";
import { render, screen } from "@testing-library/react";

import SnackParent from "./SnackParent";

test("renders learn react link", () => {
  render(<SnackParent />);
  const textElement = screen.getByText(/This is:/i);
  expect(textElement).toBeInTheDocument();
});
