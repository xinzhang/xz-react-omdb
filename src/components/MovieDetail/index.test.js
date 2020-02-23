import React from 'react';
import renderer from 'react-test-renderer';
import MovieDetail from '.';

describe('<MovieDetail /> Component', () => {
  test('it should match the MovieDetail', () => {
    const component = renderer.create(<MovieDetail imdbID="tt1560954" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
