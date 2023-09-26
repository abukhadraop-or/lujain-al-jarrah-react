/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import {
  CardContainer,
  CardContent,
  CardImage,
  MovieDescription,
  MovieDate,
  MovieTitle,
  PercentageContainer,
} from "components/MovieCard/styles";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PropTypes from "prop-types";

/**
 * MovieCard Component
 * Displays a card representing a movie with its title, release date, description, and image.
 *
 * @param {string} title - The title of the movie.
 * @param {string} releaseDate - The release date of the movie.
 * @param {string} description - The description or summary of the movie.
 * @param {string} imageSrc - The URL or source for the movie's image
 *  * @param {number} props.voteAverage - The average vote for the movie.
 * @returns {JSX.Element} JSX element representing the movie card.
 */
export default function MovieCard({
  title,
  releaseDate,
  description,
  imageSrc,
  voteAverage,
}) {
  const percentage = voteAverage * 10;
  const colorMap = {
    high: { pathColor: "#21C875", trailColor: "#204529" },
    medium: { pathColor: "#D2D531", trailColor: "#3E3B10" },
    low: { pathColor: "#DB2360", trailColor: "#571435" },
    none: { pathColor: "#666666", trailColor: "#666666" },
  };

  let { pathColor, trailColor } = colorMap.none;

  if (percentage >= 70) {
    ({ pathColor, trailColor } = colorMap.high);
  } else if (percentage >= 40) {
    ({ pathColor, trailColor } = colorMap.medium);
  } else {
    ({ pathColor, trailColor } = colorMap.low);
  }

  return (
    <CardContainer>
      <CardImage src={imageSrc} alt="Movie" />
      <CardContent>
        <MovieTitle>{title}</MovieTitle>
        <MovieDate>{releaseDate}</MovieDate>
        <MovieDescription>{description}</MovieDescription>
        <PercentageContainer className="percentage-container">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            background
            styles={buildStyles({
              backgroundColor: "#081C22",
              textSize: "30px",
              textColor: "#FFFFFF",
              pathColor,
              trailColor,
            })}
          />
        </PercentageContainer>
      </CardContent>
    </CardContainer>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  voteAverage: PropTypes.number,
};
MovieCard.defaultProps = {
  title: "",
  releaseDate: "",
  description: "",
  imageSrc: "",
  voteAverage: 0,
};
