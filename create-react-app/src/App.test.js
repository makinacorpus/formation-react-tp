import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import axios from 'axios' // v0.15.3
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock' // v9.0.2

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('<App /> component', () => {
  nock(host)
    .get('*')
    .reply(200, 'test data');

  const wrapper = shallow(<App />);

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render an .App element', () => {
    expect(wrapper.find('.App')).toHaveLength(1);
  });

  it('should render a Nominatim component', () => {
    expect(wrapper.find('Nominatim')).toHaveLength(1);
  });

  it('should render a Map component', () => {
    expect(wrapper.find('Map')).toHaveLength(1);
  });
});
