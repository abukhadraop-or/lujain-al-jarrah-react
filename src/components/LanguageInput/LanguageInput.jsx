import {
  SelectStyle,
  Text,
} from 'components/shared-styled-comp/shared-styled-comp';

import PropTypes from 'prop-types';
import React from 'react';

/**
 * LanguageInput Component
 *
 * @component
 * @param {Array} props.lang - array pf language
 * @returns {JSX.Element} Rendered LanguageInput component
 */
export default function LanguageInput({ lang }) {
  return (
    <div>
      <Text> Languages</Text>
      <SelectStyle name="language">
        {lang.map((opt) => (
          <option value={opt.iso_639_1} key={opt.iso_639_1}>
            {opt.english_name}
          </option>
        ))}
      </SelectStyle>
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
};

LanguageInput.defaultProps = {
  lang: [],
};
