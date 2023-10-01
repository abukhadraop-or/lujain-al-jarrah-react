import { Button, CardContainer } from 'components/MovieList/styles';
import React, { useState } from 'react';

import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import blurImage from 'assets/image.jpg';
import dayjs from 'dayjs';
import { fetchDataFromApiList } from 'utils/function';

// eslint-disable-next-line import/no-mutable-exports
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
  const [isMenuOpen, setIsMenuOpen] = useState('');

  /**
   * Handles toggling the menu open/close state for a specific movie.
   * If the movie's menu is currently open, it closes it. If closed, it opens it.
   *
   * @param {string} movieId - The unique identifier of the movie.
   */
  const menuOpenHandler = (movieId) => {
    if (isMenuOpen === movieId) {
      setIsMenuOpen('');
    } else {
      setIsMenuOpen(movieId);
    }
  };

  /**
   * Handles loading more movies by making an API call to fetch additional movie data.
   */
  const loadMoreHandler = () => {
    // eslint-disable-next-line no-plusplus
    pageNumber++;
    // eslint-disable-next-line prefer-const
    let updatedParams = {
      ...params,
      page: pageNumber,
    };
    setParams(updatedParams);
    fetchDataFromApiList('discover/movie', setMovies, updatedParams);
  };

  return (
    <div>
      {movies.length > 0 ? (
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
                isMenuOpen={isMenuOpen === movie.id}
              />
            ))}
          </CardContainer>
          <Button type="submit" onClick={loadMoreHandler}>
            Load more
          </Button>
        </div>
      ) : (
        'No items were found that match your query.'
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
};
MovieList.defaultProps = {
  movies: [],
  setMovies: () => {},
  setParams: () => {},
  params: { page: 1 },
};
