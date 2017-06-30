import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunk from 'redux-thunk';
import axios from 'axios' // v0.15.3
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock' // v9.0.2
import configureMockStore from 'redux-mock-store';

import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App, { AppView } from './App';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore   = configureMockStore(middlewares);
const host = 'http://localhost';

axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

describe('<App /> component', () => {

  nock(host)
    .get('*')
    .reply(200, 'test data');

  let Container;
  let Component;
  const store = mockStore({
    nominatim: {},
    overpass: {}
  });

  const div = global.document.createElement('div');
  global.document.body.appendChild(div);

  const wrapper = mount(
    <Provider store={store}>
      <MuiThemeProvider>
        <App />
      </MuiThemeProvider>
    </Provider>
  , {attachTo: div});

  Component = wrapper.find(AppView);

  it('should render an .App element', () => {
    expect(Component.find('.App')).toHaveLength(1);
  });

  it('should render a Nominatim component', () => {
    expect(Component.find('Nominatim')).toHaveLength(1);
  });

  it('should render a Map component', () => {
    expect(Component.find('Map')).toHaveLength(1);
  });
});
