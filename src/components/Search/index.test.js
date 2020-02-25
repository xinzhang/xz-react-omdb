import React from 'react';
import { render, wait } from '@testing-library/react';
import { Provider } from 'react-redux';
import makeStore from 'store';
import Search from '.';

jest.mock('api/omdbApi');

describe('<MovieDetail /> Component', () => {
  test('it should return the Search results', async () => {
    const { getByText, queryByTestId } = render(
      <Provider store={makeStore}>
        <Search onClick={() => {}} imdbID="tt1560954" />,
      </Provider>,
    );
    expect(queryByTestId('spinner')).toBeTruthy();
    await wait(() => expect(getByText('Gun')).toBeInTheDocument());
  });
});
