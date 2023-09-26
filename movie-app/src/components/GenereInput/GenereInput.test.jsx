/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import GenereInput from "components/GenereInput/GenereInput";

const { getByText } = screen;

describe("GenereInput", () => {
  const genres = [
    { id: 1, name: "Action" },
    { id: 2, name: "Comedy" },
  ];

  it("renders correctly", () => {
    render(
      <GenereInput
        setSelectedGenres={() => {}}
        selectedGenres={[]}
        genres={genres}
      />,
    );

    genres.forEach((genre) => {
      const genreButton = getByText(genre.name);
      expect(genreButton).toBeInTheDocument();
    });
  });
});
