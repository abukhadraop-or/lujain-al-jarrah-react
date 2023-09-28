/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "components/MovieCard/MovieCard";

const { getByText, getByAltText } = screen;

describe("MovieCard", () => {
  const mockMovie = {
    id: 1,
    title: "Movie 1",
    release_date: "2022-01-01",
    overview: "Description 1",
    poster_path: "/path1.jpg",
  };

  test("renders with correct movie information", () => {
    render(
      <MovieCard
        title={mockMovie.title}
        releaseDate={mockMovie.release_date}
        description={mockMovie.overview}
        imageSrc={mockMovie.poster_path}
      />,
    );

    expect(getByText("Movie 1")).toBeInTheDocument();
    expect(getByText("2022-01-01")).toBeInTheDocument();
    expect(getByText("Description 1")).toBeInTheDocument();
    expect(getByAltText("Movie")).toBeInTheDocument();
  });
});
