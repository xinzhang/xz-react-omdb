import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { searchMovies } from 'api/omdbApi';
import { fetchMovieById } from 'store/actions';
import MovieCard from 'components/MovieCard';
import Spinner from 'elements/Spinner';
import Paging from 'components/Paging';
import Input from 'elements/Input';

const StyledWrapper = styled.div`
  min-width: 340px;
  flex: 1;
`;

const StyledSearch = styled.div`
  padding: 16px;
  justify-content: center;
  flex: 1;
`;

export function Search({ imdbID }) {
  const [data, setData] = useState({ Search: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState('spider man');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (search.length < 3) return;
      setIsLoading(true);
      try {
        const result = await searchMovies(search, currentPage);
        setData(result.data);
      } catch (e) {}
      setIsLoading(false);
    };
    fetchData();
  }, [search, currentPage]);

  return (
    <StyledWrapper>
      <StyledSearch>
        <Input
          type="text"
          value={search}
          onChange={(event) => {
            setCurrentPage(1);
            setSearch(event.target.value);
          }}
        />
      </StyledSearch>

      {isLoading ? (
        <Spinner />
      ) : (
        <StyledSearch>
          {data.Search &&
            data.Search.map((item) => (
              <MovieCard
                key={item.imdbID}
                movie={item}
                selected={imdbID === item.imdbID}
                onClick={() => dispatch(fetchMovieById(item.imdbID))}
              />
            ))}
          {data.totalResults > 10 && (
            <Paging
              currentPage={currentPage}
              totalResults={data.totalResults}
              onClick={setCurrentPage}
            />
          )}
        </StyledSearch>
      )}
    </StyledWrapper>
  );
}

Search.defaultProps = {
  imdbID: -1,
};

const mapStateToProps = ({ movie }) => ({
  imdbID: movie.imdbID,
});

export default connect(mapStateToProps)(Search);
