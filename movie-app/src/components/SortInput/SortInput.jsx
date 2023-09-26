/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ContentName,
  Paragraph,
  SelectStyle,
} from "components/FilterSort/styles";
import React, { useState } from "react";
import arrow from "assets/arrow.svg";
import { Icon, ContentContainer } from "components/SortInput/styles";

/**
 * Functional component for sorting movie results.
 * @component
 */
export default function SortInput() {
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
    <ContentContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ContentName onClick={showContent}>Sort</ContentName>
        <Icon src={arrow} alt="arrow" isActive={isActive} />
      </div>

      <div style={{ display: isActive ? "block" : "none" }}>
        <label htmlFor="sort">
          <Paragraph> Sort Results By</Paragraph>
          <SelectStyle name="sort" id="sort">
            <option value="popularity.desc">Popularity Descending</option>
            <option value="popularity.asc">Popularity Ascending</option>
            <option value="vote_average.desc">Rating Descending</option>
            <option value="vote_average.asc">Rating Ascending</option>
            <option value="primary_release_date.desc">
              Release Date Descending
            </option>
            <option value="primary_release_date.asc">
              Release Date Ascending
            </option>
            <option value="title.desc">Title (Z-A) </option>
            <option value="title.asc">Title (A-Z)</option>
          </SelectStyle>
        </label>
      </div>
    </ContentContainer>
  );
}
