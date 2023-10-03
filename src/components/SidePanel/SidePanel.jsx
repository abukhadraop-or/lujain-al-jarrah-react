import Button from 'components/SidePanel/styles';
import Filter from 'components/Filter/Filter';
import PropTypes from 'prop-types';
import React from 'react';
import Sort from 'components/Sort/Sort';

/**
 * Filter and sort component for movies.
 *
 * @param {object} props The properties for the component.
 * @param {function} props.getMovies  Function to retrieve movies.
 * @param {function} props.setSelectedGenres  Function to set selected genres.
 * @param {Array} props.selectedGenres  Array of selected genres.
 * @param {function} props.setAvailabilities Function to set availabilities.
 * @param {Array} props.availabilities  Array of availabilities.
 * @param {function} props.setRelease  Function to set release.
 * @param {Array} props.release Array of release types.
 * @param {function} props.setSelectedKeyword Function to set SelectedKeyword.
 * @param {Array} props.selectedKeyword Array of selectedKeyword.
 *
 * @returns {JSX.Element} The SidePanel component.
 */
export default function SidePanel({
  getMovies,
  setSelectedGenres,
  selectedGenres,
  setAvailabilities,
  availabilities,
  setRelease,
  release,
  setSelectedKeyword,
  selectedKeyword,
}) {
  return (
    <div>
      <form onSubmit={getMovies}>
        <Sort />
        <Filter
          setSelectedGenres={setSelectedGenres}
          selectedGenres={selectedGenres}
          setAvailabilities={setAvailabilities}
          availabilities={availabilities}
          setRelease={setRelease}
          release={release}
          setSelectedKeyword={setSelectedKeyword}
          selectedKeyword={selectedKeyword}
        />
        <Button>Search</Button>
      </form>
    </div>
  );
}

SidePanel.propTypes = {
  getMovies: PropTypes.func,
  setSelectedGenres: PropTypes.func,
  selectedGenres: PropTypes.arrayOf(PropTypes.string),
  setAvailabilities: PropTypes.func,
  availabilities: PropTypes.arrayOf(PropTypes.string),
  setRelease: PropTypes.func,
  release: PropTypes.arrayOf(PropTypes.string),
  setSelectedKeyword: PropTypes.func,
  selectedKeyword: PropTypes.arrayOf(PropTypes.string),
};

SidePanel.defaultProps = {
  getMovies: () => {},
  setSelectedGenres: () => {},
  selectedGenres: [],
  setAvailabilities: () => {},
  availabilities: [],
  setRelease: () => {},
  release: [],
  setSelectedKeyword: () => {},
  selectedKeyword: [],
};
