import GenresButton from 'components/GenreInput/styles';
import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'components/shared-styled-comp/shared-styled-comp';

/**
 * Functional component for selecting movie genres.
 *
 * @param {Object} props - The component's properties.
 * @param {Function} props.setSelectedGenres - Function to set selected genres.
 * @param {Array} props.selectedGenres - Array of selected genres.
 * @param {Array} props.genres - Array of available genres.
 */
export default function GenreInput({
  setSelectedGenres,
  selectedGenres,
  genres,
  errorMessage,
}) {
  /**
   * Adds or removes a genre to/from the selected genres list.
   * @param {object} e - Event object.
   */
  const addGenres = (e) => {
    e.preventDefault();
    if (selectedGenres.includes(e.target.value)) {
      setSelectedGenres((prev) =>
        prev.filter((genre) => genre !== e.target.value),
      );
    } else {
      setSelectedGenres((prev) => [...prev, e.target.value]);
    }
  };

  return (
    <>
      <Text> Genres </Text>
      {genres &&
        !errorMessage &&
        genres.map((genre) => (
          <GenresButton
            value={genre.id}
            key={genre.id}
            onClick={addGenres}
            isActive={selectedGenres.includes(String(genre.id))}
          >
            {genre.name}
          </GenresButton>
        ))}
      {errorMessage && <div> {errorMessage}</div>}
    </>
  );
}

GenreInput.propTypes = {
  setSelectedGenres: PropTypes.func,
  selectedGenres: PropTypes.arrayOf(PropTypes.string),
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  errorMessage: PropTypes.string,
};

GenreInput.defaultProps = {
  setSelectedGenres: () => {},
  selectedGenres: [],
  genres: [],
  errorMessage: null,
};
