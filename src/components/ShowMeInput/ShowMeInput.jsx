import React from 'react';
import { Text } from 'components/shared-styled-comp/shared-styled-comp';
import data from 'components/ShowMeInput/show-me-input-data';

/**
 * ShowMeInput Component
 *
 * @component
 * @returns {JSX.Element} Rendered ShowMeInput component
 */
export default function ShowMeInput() {
  return (
    <div>
      <Text>Show Me</Text>
      {data.map((item) => (
        <label htmlFor={item.id} key={item.id}>
          <input type="radio" id={item.id} name="show_me" value={item.value} />
          {item.label}
          <br />
        </label>
      ))}
    </div>
  );
}
