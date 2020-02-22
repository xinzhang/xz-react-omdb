import { SELECT_MOVIE_BY_ID, UPDATE_MOVIES } from 'store/actions';

const initialState = {
  movies,
  selected: '',
  keyword : '',  
  totalPage: -1,
  currentPage: -1,
};

export default function video(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MOVIES:
      return {
        movies: action.data.Search,
        totalPage: action,data.
        ...action.movie,
      };
    case 
    default:
      return state;
  }
}
