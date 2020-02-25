import React from 'react';
import { render } from '@testing-library/react';
import { MovieDetail } from '.';

const movieData = {
  Title: 'Gun',
  imdbID: 'tt1560954',
  Language: 'English',
};

describe('<MovieDetail /> Component', () => {
  test('it should return the MovieDetail', async () => {
    const { getByText } = render(<MovieDetail movie={movieData} />);
    expect(getByText('Gun')).toBeInTheDocument();
    expect(getByText('Language')).toBeInTheDocument();
  });
});
