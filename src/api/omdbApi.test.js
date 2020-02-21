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
});
