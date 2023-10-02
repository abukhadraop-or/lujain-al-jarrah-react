import React, { useState } from 'react';
import {
  SelectStyle,
  Text,
} from 'components/shared-styled-comp/shared-styled-comp';

import { DatePicker } from 'antd';
import Label from 'components/ReleaseDateInput/styles';
import PropTypes from 'prop-types';

/**
 * Functional component for filtering by release dates.
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.country - Array of available countries.
 * @param {function} props.setRelease - Callback function to set release types.
 * @param {Array} props.release - Current release types.
 */
export default function ReleaseDateInput({
  country,
  setRelease,
  release,
  errorMessage,
}) {
  const [searchAllRelease, setSearchAllRelease] = useState(true);
  const [searchAllCountry, setSearchAllCountry] = useState(true);
  const releasArr = [
    { name: 'Theatrical (limited)', value: 2 },
    { name: 'Theatrical', value: 3 },
    { name: 'Premiere', value: 1 },
    { name: 'Digital', value: 4 },
    { name: 'Physical', value: 5 },
    { name: 'TV', value: 6 },
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
  const searchAllCountryHandler = (e) => {
    console.log(e.target.value);
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
      <Text>Release Dates</Text>

      <label htmlFor="release" key="release-label">
        <input
          type="checkbox"
          id="release"
          name="release"
          value="release"
          defaultChecked={searchAllRelease}
          onChange={searchAllReleaseHandler}
        />
        Search all releases?
      </label>
      {!searchAllRelease && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="country" key="country-label">
            <input
              type="checkbox"
              id="country"
              name="country"
              value="country"
              data-testid="country"
              defaultChecked={searchAllCountry}
              onChange={searchAllCountryHandler}
            />
            Search all countries?
          </label>
          {!searchAllCountry && (
            <SelectStyle name="countries" key="countries-select">
              {country &&
                !errorMessage &&
                country.map((opt) => (
                  <option key={opt.iso_3166_1} value={opt.iso_3166_1}>
                    {opt.english_name}
                  </option>
                ))}
            </SelectStyle>
          )}
          {errorMessage && !searchAllCountry && <div> {errorMessage}</div>}
          <br />
          {releasArr.map((opt) => (
            <label htmlFor={opt.name} key={opt.name}>
              <input
                type="checkbox"
                id={opt.name}
                name={opt.name}
                value={opt.value}
                onChange={changeRelease}
              />
              {opt.name}
            </label>
          ))}
        </div>
      )}
      <div key="date-pickers" style={{ marginTop: '10px' }}>
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

ReleaseDateInput.propTypes = {
  country: PropTypes.arrayOf(
    PropTypes.shape({
      iso_3166_1: PropTypes.string,
      english_name: PropTypes.string,
    }),
  ),
  setRelease: PropTypes.func,
  release: PropTypes.arrayOf(PropTypes.string),
  errorMessage: PropTypes.string,
};

ReleaseDateInput.defaultProps = {
  setRelease: () => {},
  country: [],
  release: [],
  errorMessage: null,
};
