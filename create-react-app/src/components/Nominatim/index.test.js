import React from 'react';
import Nominatim from './';

import renderer from 'react-test-renderer';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

it('renders correctly to snapshot', () => {
  const tree = renderer.create(
    <Nominatim />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly to snapshot', () => {
  let functionCalled = false;
  const handleInput = () => { functionCalled = true };
  const tree = renderer.create(
    <Nominatim handleInput={handleInput}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
  expect(functionCalled).toBe(true);
});
