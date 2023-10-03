import { Content, SortContainer } from 'components/Sort/styles';
import {
  Icon,
  Label,
  SelectStyle,
  Text,
  Title,
} from 'components/shared-styled-comp/shared-styled-comp';
import React, { useState } from 'react';

import arrow from 'assets/arrow.svg';
import sortOptions from 'components/Sort/sort-data';

/**
 * Functional component for sorting movie results.
 */
export default function Sort() {
  const [isActive, setIsActive] = useState(false);

  /**
   * Toggles the display of the content.
   * @function
   * @param {object} e - Event object.
   */
  const showContent = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  };

  return (
    <SortContainer>
      <Label onClick={showContent}>
        <Title> Sort</Title>
        <Icon src={arrow} alt="arrow" isActive={isActive} />
      </Label>

      <Content isActive={isActive}>
        <label htmlFor="sort">
          <Text> Sort Results By</Text>
          <SelectStyle name="sort" id="sort">
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </SelectStyle>
        </label>
      </Content>
    </SortContainer>
  );
}
