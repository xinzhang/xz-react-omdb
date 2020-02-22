import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, StyledTitle, StyledFavor, StyledFontSize } from './styled';

const MovieCard = ({ movie, selected, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledTitle>{movie.Title}</StyledTitle>
      <StyledFavor>
        <StyledFontSize fontSize="smaller">{movie.Year}</StyledFontSize>
        {selected && (
          <StyledFontSize fontSize="20px">
            <FontAwesomeIcon icon={faStar} />
          </StyledFontSize>
        )}
      </StyledFavor>
    </StyledCard>
  );
};

MovieCard.prototype = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Title: PropTypes.string,
    Year: PropTypes.number,
  }).isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

MovieCard.defaultProps = {
  selected: false,
};
export default MovieCard;
