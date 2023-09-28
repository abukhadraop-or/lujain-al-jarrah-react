/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SearchAllAvailabe from "./SearchAllAvailabe";

const { getByText, getByTestId } = screen;
describe("SearchAllAvailabe", () => {
  it("renders correctly", () => {
    render(
      <SearchAllAvailabe setAvailabilities={() => {}} availabilities={[]} />,
    );
    const allCheckbox = getByText("Search all availabilities?");
    expect(allCheckbox).toBeInTheDocument();
  });

  it('toggles searchAllActive state when "Search all availabilities?" checkbox is clicked', () => {
    render(
      <SearchAllAvailabe setAvailabilities={() => {}} availabilities={[]} />,
    );
    const allCheckbox = getByText("Search all availabilities?");
    fireEvent.click(allCheckbox);
    expect(allCheckbox).not.toBeChecked();
  });

  it("calls changeAvailabilities function when availability checkboxes are clicked", () => {
    const setAvailabilitiesMock = jest.fn();
    render(
      <SearchAllAvailabe
        setAvailabilities={setAvailabilitiesMock}
        availabilities={[]}
      />,
    );
    const allCheckbox = getByText("Search all availabilities?");
    fireEvent.click(allCheckbox);
    const checkboxFlatrate = getByTestId("checkbox-flatrate");
    expect(checkboxFlatrate).toBeInTheDocument();
  });
});
