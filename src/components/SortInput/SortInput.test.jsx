/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import SortInput from "./SortInput";

const { getByText, getByLabelText } = screen;
describe("SortInput", () => {
  it("renders correctly", () => {
    render(<SortInput />);

    const sortContentName = getByText("Sort");
    expect(sortContentName).toBeInTheDocument();

    const sortDropdown = getByLabelText("Sort Results By");
    expect(sortDropdown).toBeInTheDocument();
  });
});
