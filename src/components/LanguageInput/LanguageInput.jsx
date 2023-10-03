import {
  SelectStyle,
  Text,
} from 'components/shared-styled-comp/shared-styled-comp';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * LanguageInput Component
 *
 * @param {Object} props - The component's properties.
 * @param {Array} props.lang - array pf language
 *@param {string} props.errorMessage - The component's properties.
 
 * @returns {JSX.Element} Rendered LanguageInput component
 */
export default function LanguageInput({ lang, errorMessage }) {
  return (
    <div>
      <Text> Languages</Text>
      <SelectStyle name="language">
        {lang &&
          !errorMessage &&
          lang.map((opt) => (
            <option value={opt.iso_639_1} key={opt.iso_639_1}>
              {opt.english_name}
            </option>
          ))}
      </SelectStyle>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}

LanguageInput.propTypes = {
  lang: PropTypes.arrayOf(
    PropTypes.shape({
      iso_639_1: PropTypes.string,
      english_name: PropTypes.string,
    }),
  ),
  errorMessage: PropTypes.string,
};

LanguageInput.defaultProps = {
  lang: [],
  errorMessage: null,
};
