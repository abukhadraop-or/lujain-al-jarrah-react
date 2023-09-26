/* eslint-disable import/no-mutable-exports */
/* eslint-disable prefer-const */
/* eslint-disable react/prop-types */
/* eslint-disable no-plusplus */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import React from "react";
import MovieCard from "components/MovieCard/MovieCard";
import dayjs from "dayjs";
import { Button, CardContainer } from "components/MovieList/styles";
import axios from "axios";
import blurImage from "assets/image.jpg";

export let pageNumber = 1;
/**
 * MovieList Component
 * Displays a list of movies in a paginated manner and provides an option to load more movies.
 *
 * @param {Array} movies - The array of movies to display.
 * @param {Function} setMovies - Function to set the movies in the parent component.
 * @param {Function} setParams - Function to set parameters in the parent component.
 * @param {Object} params - Parameters for the movie list.
 * @returns {JSX.Element} JSX element representing the movie list.
 */
export default function MovieList({ movies, setMovies, setParams, params }) {
  /**
   * Handles loading more movies by making an API call to fetch additional movie data.
   */
  const loadMoreHandler = () => {
    pageNumber++;
    const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    let updatedParams = {
      ...params,
      page: pageNumber,
    };
    setParams(updatedParams);
    axios
      .get(apiUrl, { params: updatedParams })
      .then((response) => {
        setMovies((prevMoviesList) => [
          ...prevMoviesList,
          ...response.data.results,
        ]);
      })
      .catch((error) => {
        console.error("Error fetching movie data:", error);
      });
    console.log(updatedParams);
  };

  return (
    <div>
      <CardContainer>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            releaseDate={dayjs(movie.release_date).format("MMMM D,YYYY")}
            description={movie.overview}
            imageSrc={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : blurImage
            }
          />
        ))}
      </CardContainer>
      <Button type="submit" onClick={loadMoreHandler}>
        Load more
      </Button>
    </div>
  );
}
