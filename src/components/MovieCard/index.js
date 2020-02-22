import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const MovieCard = ({ movie, selected, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(movie.imdbID)}>
      <div className="title">{movie.Title}</div>
      <div className="">
        {selected && <FontAwesomeIcon icon={faStar} />}
        {movie.Year}
      </div>
    </div>
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
