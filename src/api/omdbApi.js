import axios from 'axios';

const { REACT_APP_OMDB_SITE_URL, REACT_APP_OMDB_API_KEY } = process.env;

export async function getMovieById(imdbId) {
  const endpoint = `${REACT_APP_OMDB_SITE_URL}?apikey=${REACT_APP_OMDB_API_KEY}&plot=full&i=${imdbId}`;
  return axios.get(endpoint);
}

export async function searchMovies(keyword) {
  const endpoint = `${REACT_APP_OMDB_SITE_URL}?apikey=${REACT_APP_OMDB_API_KEY}&plot=full&s=${keyword}`;
  return axios.get(endpoint);
}
