/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { DatePicker } from "antd";

import {
  ContentContainer,
  Button,
  GenresButton,
  ContentName,
  Paragraph,
} from "components/FilterSort/styles";
import {
  searchAllActiveHandler,
  searchAllReleaseHandler,
  searchAllCountryHandler,
  showContentFilter,
  addGenres,
  showContent,
  changeAvailabilities,
  changeRelease,
} from "components/FilterSort/function";
import Select from "components/FilterSort/Select";
import SearchComponent from "components/FilterSort/Search";
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
 * @returns {JSX.Element} The FilterSort component.
 */
export default function FilterSort({
  getMovies,
  setSelectedGenres,
  selectedGenres,
  setAvailabilities,
  availabilities,
  setRelease,
  release,
}) {
  const [isActive, setIsActive] = useState(false);
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [genres, setGenres] = useState([]);
  const [searchAllActive, setSearchAllActive] = useState(true);
  const [searchAllRelease, setSearchAllRelease] = useState(true);
  const [searchAllCountry, setSearchAllCountry] = useState(true);
  const [lang, setLang] = useState([]);
  const [country, setCountry] = useState([]);
  const availableArr = ["flatrate", "free", "ads", "rent", "buy"];
  const releasArr = [
    { name: "Theatrical (limited)", value: 2 },
    { name: "Theatrical", value: 3 },
    { name: "Premiere", value: 1 },
    { name: "Digital", value: 4 },
    { name: "Physical", value: 5 },
    { name: "TV", value: 6 },
  ];

  return (
    <div>
      <form onSubmit={getMovies}>
        <ContentContainer>
          <ContentName
            onClick={(e) => {
              showContent(e, setIsActive, isActive);
            }}
          >
            Sort
          </ContentName>
          <div style={{ display: isActive ? "block" : "none" }}>
            <Select
              id="sort"
              data={[
                { name: "Popularity Descending", value: "popularity.desc" },
                { name: "Popularity Ascending", value: "popularity.asc" },
                { name: "Rating Descending", value: "vote_average.desc" },
                { name: "Rating Ascending", value: "vote_average.asc" },
                {
                  name: "Release Date Descending ",
                  value: "primary_release_date.desc",
                },
                {
                  name: "Release Date Ascending",
                  value: "primary_release_date.asc",
                },
                { name: "Title (Z-A)", value: "title.desc" },
                { name: "Title (A-Z)", value: "title.asc" },
              ]}
              paragraph="Sort Results By"
            />
          </div>
        </ContentContainer>
        <ContentContainer>
          <ContentName
            onClick={(e) =>
              showContentFilter(
                e,
                setIsActiveFilter,
                setGenres,
                setLang,
                setCountry,
              )
            }
          >
            Filter
          </ContentName>
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
            <Paragraph> Availabilities </Paragraph>
            <input
              type="checkbox"
              id="all"
              name="all"
              value="all"
              defaultChecked={searchAllActive}
              onChange={(e) => {
                searchAllActiveHandler(
                  e,
                  setSearchAllActive,
                  searchAllActive,
                  setAvailabilities,
                );
              }}
            />
            <label htmlFor="all">Search all availabilities?</label>
            {!searchAllActive && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                {availableArr.map((opt) => (
                  <label htmlFor={opt}>
                    <input
                      type="checkbox"
                      id={opt}
                      name={opt}
                      value={opt}
                      onChange={(e) => {
                        changeAvailabilities(
                          e,
                          setAvailabilities,
                          availabilities,
                        );
                      }}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            )}
            <Paragraph>Release Dates</Paragraph>
            <input
              type="checkbox"
              id="release"
              name="release"
              value="release"
              defaultChecked={searchAllRelease}
              onChange={(e) => {
                searchAllReleaseHandler(
                  e,
                  setSearchAllRelease,
                  searchAllRelease,
                  setRelease,
                );
              }}
            />
            <label htmlFor="release">Search all releases?</label>
            {!searchAllRelease && (
              <div style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="country">
                  <input
                    type="checkbox"
                    id="country"
                    name="country"
                    value="country"
                    defaultChecked={searchAllCountry}
                    onChange={(e) => {
                      searchAllCountryHandler(
                        e,
                        setSearchAllCountry,
                        searchAllCountry,
                      );
                    }}
                  />
                  Search all countries?
                </label>
                {!searchAllCountry && (
                  <select name="countries">
                    {country.map((opt) => (
                      <option value={opt.iso_3166_1}>{opt.english_name}</option>
                    ))}
                  </select>
                )}
                <br />
                {releasArr.map((opt) => (
                  <label htmlFor={opt.name}>
                    <input
                      type="checkbox"
                      id={opt.name}
                      name={opt.name}
                      value={opt.value}
                      onChange={(e) => {
                        changeRelease(e, setRelease, release);
                      }}
                    />
                    {opt.name}
                  </label>
                ))}
              </div>
            )}
            <div>
              <DatePicker name="start_date" />
              <DatePicker name="end_date" />
            </div>

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
            <Paragraph> Languages</Paragraph>
            <select name="language">
              {lang.map((opt) => (
                <option value={opt.iso_639_1}>{opt.english_name}</option>
              ))}
            </select>
            <Paragraph> Keywords</Paragraph>
            <SearchComponent />
          </div>
        </ContentContainer>
        <Button>Search</Button>
      </form>
    </div>
  );
}
