import { searchMovies} from 'api/omdbApi';

export const SELECT_MOVIE_BY_ID = 'SELECT_MOVIE_BY_ID';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const NEXT_PAGE='NEXT_PAGE';
export const PREVIOUS_PAGE='PREVIOUS_PAGE';

export const updateMovies = (data) => ({
  type: UPDATE_MOVIES,
  data,
});

export function search(keyword) {
  return async (dispatch) => {
    const { data: movie } = await searchMovies(keyword);
    dispatch(updateMovies(movie));
  };
}

export function nextPage() {
  return async (dispatch, store) => {
    const { data: movie } = await searchMovies(keyword);
    dispatch(updateMovies(movie));
  };
}

export const 