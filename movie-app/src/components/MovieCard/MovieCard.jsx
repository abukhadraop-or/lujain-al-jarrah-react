/* eslint-disable react/prop-types */
import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  MovieDescription,
  MovieDate,
  MovieTitle,
} from "components/MovieCard/styles";
/**
 * MovieCard Component
 * Displays a card representing a movie with its title, release date, description, and image.
 *
 * @param {string} title - The title of the movie.
 * @param {string} releaseDate - The release date of the movie.
 * @param {string} description - The description or summary of the movie.
 * @param {string} imageSrc - The URL or source for the movie's image.
 * @returns {JSX.Element} JSX element representing the movie card.
 */
function MovieCard({ title, releaseDate, description, imageSrc }) {
  return (
    <CardContainer>
      <CardImage src={imageSrc} alt="Movie" />
      <CardContent>
        <MovieTitle>{title}</MovieTitle>
        <MovieDate>{releaseDate}</MovieDate>
        <MovieDescription>{description}</MovieDescription>
      </CardContent>
    </CardContainer>
  );
}

export default MovieCard;
