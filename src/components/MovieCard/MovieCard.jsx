import 'react-circular-progressbar/dist/styles.css';

import {
  CardContainer,
  CardContent,
  CardImage,
  Icon,
  MenuContent,
  MenuItem,
  MovieDate,
  MovieDescription,
  MovieTitle,
  PercentageContainer,
  SubCardContainer,
} from 'components/MovieCard/styles';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { colorMap, menuItemsData } from 'components/MovieCard/MovieCardData';

import FeatherIcon from 'feather-icons-react';
import PropTypes from 'prop-types';
import React from 'react';
import menuCard from 'assets/menu-card.svg';

/**
 * MovieCard Component
 * Displays a card representing a movie with its title, release date, description, and image.
 *
 * @param {string} title - The title of the movie.
 * @param {string} releaseDate - The release date of the movie.
 * @param {string} description - The description or summary of the movie.
 * @param {string} imageSrc - The URL or source for the movie's image
 * @param {number} props.voteAverage - The average vote for the movie.
 * @param {boolean} isMenuOpen -close or open menu.
 * @param {number} menuOpenHandler - fUNCTION TO OPEN/CLOSE menu.
 * @returns {JSX.Element} JSX element representing the movie card.
 */
export default function MovieCard({
  title,
  releaseDate,
  description,
  imageSrc,
  voteAverage,
  isMenuOpen,
  menuOpenHandler,
}) {
  const percentage = voteAverage * 10;

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
      {isMenuOpen && (
        <MenuContent>
          {menuItemsData.map((item) => (
            <MenuItem key="login-link" href="#">
              <FeatherIcon icon={item.icon} /> <div> {item.name}</div>
            </MenuItem>
          ))}
        </MenuContent>
      )}
      <Icon
        src={menuCard}
        alt="menu-card"
        onClick={menuOpenHandler}
        className="menu-card"
      />

      <SubCardContainer isMenuOpen={isMenuOpen}>
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
                backgroundColor: '#081C22',
                textSize: '30px',
                textColor: '#FFFFFF',
                pathColor,
                trailColor,
              })}
            />
          </PercentageContainer>
        </CardContent>
      </SubCardContainer>
    </CardContainer>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string,
  releaseDate: PropTypes.string,
  description: PropTypes.string,
  imageSrc: PropTypes.string,
  voteAverage: PropTypes.number,
  isMenuOpen: PropTypes.bool,
  menuOpenHandler: PropTypes.func,
};

MovieCard.defaultProps = {
  title: '',
  releaseDate: '',
  description: '',
  imageSrc: '',
  voteAverage: 0,
  isMenuOpen: false,
  menuOpenHandler: () => {},
};
