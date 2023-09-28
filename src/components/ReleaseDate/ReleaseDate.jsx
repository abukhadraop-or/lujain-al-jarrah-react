/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { DatePicker } from "antd";
import { SelectStyle } from "components/SidePanel/styles";
import { Paragraph } from "components/shared-styled-comp/shared-styled-comp";
import React, { useState } from "react";
import PropTypes from "prop-types";
import Label from "components/ReleaseDate/styles";

/**
 * Functional component for filtering by release dates.
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.country - Array of available countries.
 * @param {function} props.setRelease - Callback function to set release types.
 * @param {Array} props.release - Current release types.
 */
export default function ReleaseDate({ country, setRelease, release }) {
  const [searchAllRelease, setSearchAllRelease] = useState(true);
  const [searchAllCountry, setSearchAllCountry] = useState(true);
  const releasArr = [
    { name: "Theatrical (limited)", value: 2 },
    { name: "Theatrical", value: 3 },
    { name: "Premiere", value: 1 },
    { name: "Digital", value: 4 },
    { name: "Physical", value: 5 },
    { name: "TV", value: 6 },
  ];
  /**
   * Handles the change of release type selection.
   * @param {object} e - Event object.

   */
  const changeRelease = (e) => {
    if (release.includes(e.target.value)) {
      setRelease((prev) => prev.filter((rel) => rel !== e.target.value));
    } else {
      setRelease((prev) => [...prev, e.target.value]);
    }
  };

  /**
   * Handles the change of country search option.
   * @param {object} e - Event object.
   */
  // eslint-disable-next-line no-unused-vars
  const searchAllCountryHandler = (e) => {
    setSearchAllCountry(!searchAllCountry);
    // if (e.target.value) {
    //   setRelease([]);
    // }
  };

  /**
   * Handles the change of release search option.
   * @param {object} e - Event object.
  
   */
  const searchAllReleaseHandler = (e) => {
    setSearchAllRelease(!searchAllRelease);
    if (e.target.value) {
      setRelease([]);
    }
  };
  return (
    <div>
      <Paragraph>Release Dates</Paragraph>
      <input
        type="checkbox"
        id="release"
        name="release"
        value="release"
        defaultChecked={searchAllRelease}
        onChange={searchAllReleaseHandler}
      />
      <label htmlFor="release" key="release-label">
        Search all releases?
      </label>
      {!searchAllRelease && (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="country" key="country-label">
            <input
              type="checkbox"
              id="country"
              name="country"
              value="country"
              data-testid="country"
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
            <SelectStyle name="countries" key="countries-select">
              {country.map((opt) => (
                <option key={opt.iso_3166_1} value={opt.iso_3166_1}>
                  {opt.english_name}
                </option>
              ))}
            </SelectStyle>
          )}
          <br />
          {releasArr.map((opt) => (
            <label htmlFor={opt.name} key={opt.name}>
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
      <div key="date-pickers" style={{ marginTop: "10px" }}>
        <Label>
          from
          <DatePicker name="start_date" data-testid="start_date" />
        </Label>

        <Label>
          to
          <DatePicker name="end_date" />
        </Label>
      </div>
    </div>
  );
}
ReleaseDate.propTypes = {
  country: PropTypes.arrayOf(
    PropTypes.shape({
      iso_3166_1: PropTypes.string,
      english_name: PropTypes.string,
    }),
  ),
  setRelease: PropTypes.func,
  release: PropTypes.arrayOf(PropTypes.string),
};
ReleaseDate.defaultProps = {
  setRelease: () => {},
  country: [],
  release: [],
};
