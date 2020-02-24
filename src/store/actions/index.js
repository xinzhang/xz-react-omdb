import { getMovieById } from 'api/omdbApi';

export const SELECT_MOVIE_BY_ID = 'SELECT_MOVIE_BY_ID';

export const selectedMovieUpdate = (movie) => ({
  type: SELECT_MOVIE_BY_ID,
  movie,
});

export function fetchMovieById(id) {
  return async (dispatch) => {
    const { data: movie } = await getMovieById(id);
    dispatch(selectedMovieUpdate(movie));
  };
}
