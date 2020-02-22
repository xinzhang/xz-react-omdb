import React from 'react';
import renderer from 'react-test-renderer';
import FieldItem from '.';

describe('<FieldItem /> Component', () => {
  test('it should match the FieldItem with value', () => {
    const component = renderer.create(<FieldItem field="name" text="value" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('it should match the FieldItem without value', () => {
    const component = renderer.create(<FieldItem field="name" text="" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
