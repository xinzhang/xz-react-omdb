require('dotenv').config();
const omdbApi = require('./omdbApi');
jest.mock('./omdbApi');

const imdbId = 'tt1560954';

describe('test omdbapi with mocks', () => {
  test('should omdbAPI return by ID', async () => {
    const result = await omdbApi.getMovieById(imdbId);
    expect(result.data.Title).toBe('Gun');
    expect(result.data.imdbID).toBe(imdbId);
  });

  test('should omdbAPI return by search', async () => {
    const result = await omdbApi.searchMovies('spider');
    expect(result.data.totalResults).toBeGreaterThan(0);
    expect(result.data.Search[0].Title).toBe('Gun');
  });
});
