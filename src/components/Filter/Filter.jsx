import { Content, FilterContainer } from 'components/Filter/styles';
import {
  Icon,
  Label,
  Title,
} from 'components/shared-styled-comp/shared-styled-comp';
import React, { useState } from 'react';

import GenreInput from 'components/GenreInput/GenreInput';
import Keyword from 'components/Keyword/Keyword';
import LanguageInput from 'components/LanguageInput/LanguageInput';
import PropTypes from 'prop-types';
import ReleaseDateInput from 'components/ReleaseDateInput/ReleaseDateInput';
import SearchAllAvailableInput from 'components/SearchAllAvailableInput/SearchAllAvailableInput';
import ShowMeInput from 'components/ShowMeInput/ShowMeInput';
import arrow from 'assets/arrow.svg';
import fetchDataFromApi from 'utils/function';

/**
 * Filter Component
 * 
 * @param {Object}    props  The component's properties.
 * @param {Function}  props.setSelectedGenres  Callback function to set selected movie genres.
 * @param {string[]}  props.selectedGenres  Array of selected movie genres.
 * @param {Function}  props.setAvailabilities  Callback function to set selected availabilities.
 * @param {string[]}  props.availabilities Array of selected availabilities.
 * @param {Function}  props.setRelease  Callback function to set selected release dates.
 * @param {string[]}  props.release  Array of selected release dates.
 * @param {Function}  props.setSelectedKeyword  Callback function to set selected keywords for search.
 * @param {string[]}  props.selectedKeyword Array of selected keywords.
 * 
 * @returns {JSX.Element} Rendered Filter component

 * */
export default function Filter({
  setSelectedGenres,
  selectedGenres,
  setAvailabilities,
  availabilities,
  setRelease,
  release,
  setSelectedKeyword,
  selectedKeyword,
}) {
  const [isActive, setIsActive] = useState(false);
  const [lang, setLang] = useState([]);
  const [country, setCountry] = useState([]);
  const [genres, setGenres] = useState([]);
  const [errorMessages, setErrorMessages] = useState({
    langErrorMsg: null,
    countryErrorMsg: null,
    genreErrorMsg: null,
  });

  /**
   * Error Handler Function to set an error message if exists otherwise the data.
   * @param {object} item - item object(languages,countries,genresAll).
   * @param {string} errorName - Name of error.
   * @param {function} setData - Function to set the data from the API.
  
   */
  const errorHandler = (item, errorName, setData) => {
    if (item.name === 'AxiosError') {
      setErrorMessages({ ...errorMessages, [errorName]: item.message });
    } else {
      setData(item);
    }
  };

  /**
   * Toggles the display of the content filter and fetches genres, languages, and countries.
   * @param {object} e - Event object.
   */
  const showFilterContent = async (e) => {
    e.preventDefault();
    setIsActive((prevIsActive) => !prevIsActive);
    try {
      const [languages, countries, genresAll] = await Promise.all([
        fetchDataFromApi('configuration/languages'),
        fetchDataFromApi('configuration/countries'),
        fetchDataFromApi('genre/movie/list', 'genres'),
      ]);
      errorHandler(languages, 'langErrorMsg', setLang);
      errorHandler(countries, 'countryErrorMsg', setCountry);
      errorHandler(genresAll, 'genreErrorMsg', setGenres);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <FilterContainer>
      <Label onClick={showFilterContent}>
        <Title>Filter</Title>
        <Icon src={arrow} alt="arrow" isActive={isActive} />
      </Label>

      <Content isActive={isActive}>
        <ShowMeInput />
        <SearchAllAvailableInput
          setAvailabilities={setAvailabilities}
          availabilities={availabilities}
        />
        <ReleaseDateInput
          country={country}
          setRelease={setRelease}
          release={release}
          errorMessage={errorMessages.countryErrorMsg}
        />
        <GenreInput
          setSelectedGenres={setSelectedGenres}
          selectedGenres={selectedGenres}
          genres={genres}
          errorMessage={errorMessages.genreErrorMsg}
        />
        <LanguageInput lang={lang} errorMessage={errorMessages.langErrorMsg} />
        <Keyword
          setSelectedKeyword={setSelectedKeyword}
          selectedKeyword={selectedKeyword}
        />
      </Content>
    </FilterContainer>
  );
}

Filter.propTypes = {
  setSelectedGenres: PropTypes.func,
  selectedGenres: PropTypes.arrayOf(PropTypes.string),
  setAvailabilities: PropTypes.func,
  availabilities: PropTypes.arrayOf(PropTypes.string),
  setRelease: PropTypes.func,
  release: PropTypes.arrayOf(PropTypes.string),
  setSelectedKeyword: PropTypes.func,
  selectedKeyword: PropTypes.arrayOf(PropTypes.string),
};

Filter.defaultProps = {
  setSelectedGenres: () => {},
  selectedGenres: [],
  setAvailabilities: () => {},
  availabilities: [],
  setRelease: () => {},
  release: [],
  setSelectedKeyword: () => {},
  selectedKeyword: [],
};
