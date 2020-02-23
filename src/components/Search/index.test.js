import React from 'react';
import { render, wait } from '@testing-library/react';
import Search from '.';

jest.mock('api/omdbApi');

describe('<MovieDetail /> Component', () => {
  test('it should return the Search results', async () => {
    const { getByText, queryByTestId } = render(
      <Search onClick={() => {}} imdbID="tt1560954" />,
    );
    expect(queryByTestId('spinner')).toBeTruthy();
    await wait(() => expect(getByText('Gun')).toBeInTheDocument());
  });
});
