const movie = {
  Title: 'Gun',
  Year: '2010',
  Rated: 'R',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTc0MDk3MjI1OV5BMl5BanBnXkFtZTcwNzg0MjIyMw@@._V1_SX300.jpg',
  imdbID: 'tt1560954',
  Response: 'True',
};

export function getMovieById(imdbId) {
  console.log('mocks getMovieById');
  return { data: movie };
}
