import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Spinner from 'elements/Spinner';
import FieldItem from 'elements/FieldItem';

const StyledMovieDetailWrapper = styled.div`
  width: 68vw;
  display: flex;
  flex-direction: row;
  padding: 16px;
  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

const StyledPoster = styled.div`
  padding: 16px;
  flex: 0 0;
`;

const StyledMovieTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  padding: 16px 0px;
`;

const StyledGenre = styled.div`
  font-size: 12px;
  padding: 8px 0px;
`;

const StyledPlot = styled.div`
  font-size: 14px;
  padding: 8px 0px;
`;

export const MovieDetail = ({ movie }) => {
  return (
    <StyledMovieDetailWrapper>
      {!movie ? (
        <Spinner />
      ) : (
        <>
          <div className="movieIntro">
            <StyledMovieTitle>{movie.Title}</StyledMovieTitle>
            <StyledGenre>{movie.Genre}</StyledGenre>
            <StyledPlot>{movie.Plot}</StyledPlot>
            <FieldItem field="Language" text={movie.Language} />
            <FieldItem field="Director" text={movie.Director} />
            <FieldItem field="Actors" text={movie.Actors} />
            <FieldItem field="Duration" text={movie.Runtime} />
          </div>
          <StyledPoster>
            <img src={movie.Poster} alt={movie.Title} />
          </StyledPoster>
        </>
      )}
    </StyledMovieDetailWrapper>
  );
};

const mapStateToProps = ({ movie }) => ({
  movie,
});

export default connect(mapStateToProps)(MovieDetail);
