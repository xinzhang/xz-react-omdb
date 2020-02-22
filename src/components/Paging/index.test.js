import React from 'react';
//import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Paging from '.';

describe('<FieldItem /> Component', () => {
  test('it should with next button', () => {
    const { queryByTestId } = render(
      <Paging totalResults="15" currentPage="1" onClick={() => {}} />,
    );
    expect(queryByTestId('prev')).toBeFalsy();
    expect(queryByTestId('next')).toBeTruthy();
  });
  test('it should not have pager button', () => {
    const { queryByTestId } = render(
      <Paging totalResults="5" currentPage="1" onClick={() => {}} />,
    );
    expect(queryByTestId('next')).toBeFalsy();
    expect(queryByTestId('prev')).toBeFalsy();
  });
  test('it should with both navigation button', () => {
    const { queryByTestId } = render(
      <Paging totalResults="40" currentPage="3" onClick={() => {}} />,
    );
    expect(queryByTestId('prev')).toBeTruthy();
    expect(queryByTestId('next')).toBeTruthy();
  });
});
