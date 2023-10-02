import { Button, CardContainer } from 'components/MovieList/styles';
import React, { useState } from 'react';

import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import blurImage from 'assets/image.jpg';
import dayjs from 'dayjs';
import fetchDataFromApi from 'utils/function';

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
export default function MovieList({
  movies,
  setMovies,
  setParams,
  params,
  ErrorMessage,
}) {
  const [selectedMovieId, setSelectedMovieId] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  /**
   * Handles toggling the menu open/close state for a specific movie.
   * If the movie's menu is currently open, it closes it. If closed, it opens it.
   *
   * @param {string} movieId - The unique identifier of the movie.
   */
  const menuOpenHandler = (movieId) => {
    if (selectedMovieId === movieId) {
      setSelectedMovieId('');
    } else {
      setSelectedMovieId(movieId);
    }
  };

  /**
   * Handles loading more movies by making an API call to fetch additional movie data.
   */
  const loadMoreHandler = async () => {
    let updatedParams = { ...params };
    updatedParams = {
      ...params,
      page: pageNumber + 1,
    };
    setParams(updatedParams);
    const moviesData = await fetchDataFromApi(
      'discover/movie',
      'results',
      updatedParams,
    );
    setMovies((prev) => [...prev, ...moviesData]);
    setPageNumber(pageNumber + 1);
  };

  return (
    <div>
      {movies.length > 0 && !ErrorMessage ? (
        <div>
          <CardContainer>
            {movies.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                releaseDate={dayjs(movie.release_date).format('MMMM D,YYYY')}
                description={movie.overview}
                imageSrc={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                    : blurImage
                }
                voteAverage={movie.vote_average}
                menuOpenHandler={() => {
                  menuOpenHandler(movie.id);
                }}
                isMenuOpen={selectedMovieId === movie.id}
              />
            ))}
          </CardContainer>
          <Button type="submit" onClick={loadMoreHandler}>
            Load more
          </Button>
        </div>
      ) : (
        ErrorMessage || 'No items were found that match your query.'
      )}
    </div>
  );
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      release_date: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
  setMovies: PropTypes.func,
  setParams: PropTypes.func,
  params: PropTypes.shape({
    page: PropTypes.number,
  }),
  ErrorMessage: PropTypes.string,
};

MovieList.defaultProps = {
  movies: [],
  setMovies: () => {},
  setParams: () => {},
  params: { page: 1 },
  ErrorMessage: null,
};
