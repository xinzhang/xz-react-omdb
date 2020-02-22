import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getMovieById } from 'api/omdbApi';
import Spinner from 'components/Spinner';
import FieldItem from 'components/FieldItem';

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

const MovieDetail = ({ imdbID }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const result = await getMovieById(imdbID);
        setData(result.data);
      } catch (e) {}
      setIsLoading(false);
    };
    fetchData();
  }, [imdbID]);
  console.log(data);
  return (
    <StyledMovieDetailWrapper>
      {isLoading || !data ? (
        <Spinner />
      ) : (
        <>
          <div className="movieIntro">
            <StyledMovieTitle>{data.Title}</StyledMovieTitle>
            <StyledGenre>{data.Genre}</StyledGenre>
            <StyledPlot>{data.Plot}</StyledPlot>
            <FieldItem field="Language" text={data.Language} />
            <FieldItem field="Director" text={data.Director} />
            <FieldItem field="Actors" text={data.Actors} />
            <FieldItem field="Duration" text={data.Runtime} />
          </div>
          <StyledPoster>
            <img src={data.Poster} alt={data.Title} />
          </StyledPoster>
        </>
      )}
    </StyledMovieDetailWrapper>
  );
};

export default MovieDetail;
