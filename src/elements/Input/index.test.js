import React from 'react';
import renderer from 'react-test-renderer';
import Input from '.';

describe('<FieldItem /> Component', () => {
  test('it should match the FieldItem with value', () => {
    const component = renderer.create(
      <Input placeholder="abc" value="test" onChange={() => {}} />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
