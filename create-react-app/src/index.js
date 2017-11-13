import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';
import store from './store/';

import './index.css';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <div>
          <Route path="/home" component={Home}/>
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
