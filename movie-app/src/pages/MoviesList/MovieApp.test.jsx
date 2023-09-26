/* eslint-disable no-undef */
import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import MovieApp from "pages/MoviesList/MovieApp";

const { findByText } = screen;

jest.mock("axios");

const mockMovies = {
  data: {
    results: [
      {
        id: 1,
        title: "Movie 1",
        release_date: "2022-01-01",
        overview: "Description 1",
        poster_path: "/path1.jpg",
      },
    ],
  },
};

test("fetches movies on component mount", async () => {
  axios.get.mockResolvedValue(mockMovies);
  render(<MovieApp />);

  expect(axios.get).toHaveBeenCalledWith(expect.any(String), {
    params: expect.any(Object),
  });

  const movieTitle = await findByText("Movie 1");
  expect(movieTitle).toBeInTheDocument();
});
