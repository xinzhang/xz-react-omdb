const movie = {
  Title: 'Gun',
  Year: '2010',
  Rated: 'R',
  imdbID: 'tt1560954',
  Response: 'True',
  Runtime: '82 min',
  Genre: 'Action, Crime, Thriller',
  Director: 'Jessy Terrero',
  Actors: '50 Cent, Val Kilmer, AnnaLynne McCord, James Remar',
  Plot: 'A drama set in the world of gun-running.',
  Language: 'English',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMTc0MDk3MjI1OV5BMl5BanBnXkFtZTcwNzg0MjIyMw@@._V1_SX300.jpg',
};

export function getMovieById(imdbId) {
  console.log('mocks getMovieById');
  return { data: movie };
}

export function searchMovies(keyword) {
  console.log('mocks search');
  return {
    data: {
      Search: [movie],
      totalResults: 10,
      Response: true,
    },
  };
}
