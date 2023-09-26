/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterSort from "./FilterSort";

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
    const { getByText } = render(<FilterSort {...mockProps} />);
    expect(getByText("Sort")).toBeInTheDocument();
    expect(getByText("Filter")).toBeInTheDocument();
  });
});
