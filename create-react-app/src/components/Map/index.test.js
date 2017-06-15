import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() });

import Map from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  global.document.body.appendChild(div);
  // ReactDOM.render(<Map id="map" />, div);
  const wrapper = mount(<Map id="map" />, {attachTo: div});
});
