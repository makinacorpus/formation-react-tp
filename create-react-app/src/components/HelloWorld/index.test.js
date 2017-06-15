import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';

import HelloWorld from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloWorld />, div);
});

it('renders without crashing with attr name', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HelloWorld name='world' />, div);
});

it('renders correctly to snapshot', () => {
  const tree = renderer.create(
    <HelloWorld />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly to snapshot', () => {
  const tree = renderer.create(
    <HelloWorld name='world'/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

