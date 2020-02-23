import React from 'react';
import { render, wait } from '@testing-library/react';
import MovieDetail from '.';

jest.mock('api/omdbApi');

describe('<MovieDetail /> Component', () => {
  test('it should return the MovieDetail', async () => {
    const { getByText, queryByTestId } = render(<MovieDetail imdbID="tt1560954" />);
    expect(queryByTestId('spinner')).toBeTruthy();
    await wait(() => expect(getByText('Gun')).toBeInTheDocument());
    expect(getByText('Language')).toBeInTheDocument();
  });
});
