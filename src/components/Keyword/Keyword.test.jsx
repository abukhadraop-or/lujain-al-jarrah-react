/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import Keyword from "components/Keyword/Keyword";

const { getByText } = screen;

describe("Keyword component", () => {
  test("renders the component", () => {
    render(<Keyword />);
    const paragraphElement = getByText("Keywords");
    expect(paragraphElement).toBeInTheDocument();
  });
});
