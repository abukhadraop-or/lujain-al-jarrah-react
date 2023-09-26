/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import FilterSort from "components/FilterSort/FilterSort";

const { getByText, getByLabelText } = screen;

describe("FilterSort", () => {
  const mockProps = {
    getMovies: jest.fn(),
    setSelectedGenres: jest.fn(),
    selectedGenres: [],
    setAvailabilities: jest.fn(),
    availabilities: [],
    setRelease: jest.fn(),
    release: [],
  };

  test("renders component with default values", () => {
    render(<FilterSort {...mockProps} />);
    expect(getByText("Sort")).toBeInTheDocument();
    expect(getByText("Filter")).toBeInTheDocument();
  });

  test('toggles content display when "Sort" is clicked', async () => {
    render(<FilterSort />);
    const sortButton = getByText("Sort");
    fireEvent.click(sortButton);

    const sortSelect = getByLabelText("Sort Results By");
    await waitFor(() => expect(sortSelect).toBeInTheDocument());
  });
  test('toggles content filter display when "Filter" is clicked', async () => {
    render(<FilterSort />);
    const filterButton = getByText("Filter");
    fireEvent.click(filterButton);

    const showMeRadio = getByLabelText("Movies I Have not Seen");
    await waitFor(() => expect(showMeRadio).toBeInTheDocument());
  });
});
