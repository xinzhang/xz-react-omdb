import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from '.';

describe('<FieldItem /> Component', () => {
  test('it should match the FieldItem with value', () => {
    const component = renderer.create(<Spinner />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
