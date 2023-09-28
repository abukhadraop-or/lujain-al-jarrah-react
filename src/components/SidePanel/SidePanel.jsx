/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from "react";
import {
  ContentContainer,
  Button,
  ContentName,
  SelectStyle,
  Icon,
} from "components/SidePanel/styles";
import PropTypes from "prop-types";
import SearchAllAvailabe from "components/SearchAllAvailabe/SearchAllAvailabe";
import GenereInput from "components/GenereInput/GenereInput";
import axios from "axios";
import SortInput from "components/SortInput/SortInput";
import ReleaseDate from "components/ReleaseDate/ReleaseDate";
import Keyword from "components/Keyword/Keyword";
import arrow from "assets/arrow.svg";
import { Paragraph } from "components/shared-styled-comp/shared-styled-comp";
/**
 * Filter and sort component for movies.
 * @param {object} props - The properties for the component.
 * @param {function} props.getMovies - Function to retrieve movies.
 * @param {function} props.setSelectedGenres - Function to set selected genres.
 * @param {Array} props.selectedGenres - Array of selected genres.
 * @param {function} props.setAvailabilities - Function to set availabilities.
 * @param {Array} props.availabilities - Array of availabilities.
 * @param {function} props.setRelease - Function to set release.
 * @param {Array} props.release - Array of release types.
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
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [lang, setLang] = useState([]);
  const [country, setCountry] = useState([]);
  const [genres, setGenres] = useState([]);

  /**
   * Fetches movie genres from the API and sets them using the provided callback.
   */
  const getGenres = () => {
    const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
    const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        setGenres(response.data.genres);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /**
   * Fetches available languages from the API and sets them using the provided callback.
   */
  const getLanguages = () => {
    const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
    const apiUrl = `https://api.themoviedb.org/3/configuration/languages?api_key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      setLang(response.data);
    });
  };

  /**
   * Fetches available countries from the API and sets them using the provided callback.
   */
  const getCountry = () => {
    const apiKey = "4db3b4ee5893cead9657d41699ec4c26";
    const apiUrl = `https://api.themoviedb.org/3/configuration/countries?language=en-US&api_key=${apiKey}`;
    axios.get(apiUrl).then((response) => {
      setCountry(response.data);
    });
  };

  /**
   * Toggles the display of the content filter and fetches genres, languages, and countries.
   * @param {object} e - Event object.
   */
  const showContentFilter = (e) => {
    e.preventDefault();
    setIsActiveFilter((prevIsActive) => !prevIsActive);
    getGenres();
    getLanguages();
    getCountry();
  };

  return (
    <div>
      <form onSubmit={getMovies}>
        <SortInput />
        <ContentContainer>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ContentName onClick={showContentFilter}>Filter</ContentName>
            <Icon src={arrow} alt="arrow" isActive={isActiveFilter} />
          </div>

          <div
            style={{
              display: isActiveFilter ? "block" : "none",
              padding: "0 0.625rem",
            }}
          >
            <Paragraph>Show Me</Paragraph>
            <input type="radio" id="every_thing" name="show_me" value="0" />
            <label htmlFor="every_thing">Everything</label>
            <br />
            <input type="radio" id="seen" name="show_me" value="1" />
            <label htmlFor="seen">Movies I Have not Seen</label>
            <br />
            <input type="radio" id="not_seen" name="show_me" value="2" />
            <label htmlFor="not_seen">Movies I Have Seen</label>
            <SearchAllAvailabe
              setAvailabilities={setAvailabilities}
              availabilities={availabilities}
            />
            <ReleaseDate
              country={country}
              setRelease={setRelease}
              release={release}
            />
            <GenereInput
              setSelectedGenres={setSelectedGenres}
              selectedGenres={selectedGenres}
              genres={genres}
            />
            <Paragraph> Languages</Paragraph>
            <SelectStyle name="language">
              {lang.map((opt) => (
                <option value={opt.iso_639_1}>{opt.english_name}</option>
              ))}
            </SelectStyle>
            <Keyword
              setSelectedKeyword={setSelectedKeyword}
              selectedKeyword={selectedKeyword}
            />
          </div>
        </ContentContainer>
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
