import React from 'react';
import ReactDOM from 'react-dom';

import renderer from 'react-test-renderer';

import Map from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  global.document.body.appendChild(div);
  ReactDOM.render(<Map id="map" />, div);
});
