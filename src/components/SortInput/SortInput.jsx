/* eslint-disable jsx-a11y/label-has-associated-control */
import {
  ContentName,
  SelectStyle,
  Title,
  Paragraph,
} from "components/shared-styled-comp/shared-styled-comp";
import React, { useState } from "react";
import arrow from "assets/arrow.svg";
import { Icon, SortContainer } from "components/SortInput/styles";

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

  const sortOptions = [
    { title: "Popularity Descending", value: "popularity.desc" },
    { title: "Popularity Ascending", value: "popularity.asc" },
    { title: "Rating Descending", value: "vote_average.desc" },
    { title: "Rating Ascending", value: "vote_average.asc" },
    { title: "Release Date Descending", value: "primary_release_date.desc" },
    { title: "Release Date Ascending", value: "primary_release_date.asc" },
    { title: "Title (Z-A)", value: "title.desc" },
    { title: "Title (A-Z)", value: "title.asc" },
  ];
  return (
    <SortContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ContentName onClick={showContent}>
          <Title> Sort</Title>
          <Icon src={arrow} alt="arrow" isActive={isActive} />
        </ContentName>
      </div>

      <div style={{ display: isActive ? "block" : "none" }}>
        <label htmlFor="sort">
          <Paragraph> Sort Results By</Paragraph>
          <SelectStyle name="sort" id="sort">
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            ))}
          </SelectStyle>
        </label>
      </div>
    </SortContainer>
  );
}
