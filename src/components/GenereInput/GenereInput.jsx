/* eslint-disable import/no-extraneous-dependencies */
import { GenresButton } from "components/SidePanel/styles";
import React from "react";
import PropTypes from "prop-types";
import { Paragraph } from "components/shared-styled-comp/shared-styled-comp";

/**
 * Functional component for selecting movie genres.
 * @component
 * @param {Function} props.setSelectedGenres - Function to set selected genres.
 * @param {Array} props.selectedGenres - Array of selected genres.
 * @param {Array} props.genres - Array of available genres.
 */
export default function GenereInput({
  setSelectedGenres,
  selectedGenres,
  genres,
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
      <Paragraph> Genres </Paragraph>
      {genres.map((genre) => (
        <GenresButton
          value={genre.id}
          key={genre.id}
          onClick={(e) => {
            addGenres(e, setSelectedGenres, selectedGenres);
          }}
          isActive={selectedGenres.includes(String(genre.id))}
        >
          {genre.name}
        </GenresButton>
      ))}
    </>
  );
}

GenereInput.propTypes = {
  setSelectedGenres: PropTypes.func,
  selectedGenres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};
GenereInput.defaultProps = {
  setSelectedGenres: () => {},
  selectedGenres: [],
  genres: [],
};
