import { SELECT_MOVIE_BY_ID } from 'store/actions';

const initialState = {};

function movie(state = initialState, action) {
  switch (action.type) {
    case SELECT_MOVIE_BY_ID:
      return {
        ...action.movie,
      };
    default:
      return state;
  }
}

export default movie;
