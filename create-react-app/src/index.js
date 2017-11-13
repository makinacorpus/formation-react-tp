import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {
  Router,
  Route,
  Link
} from 'react-router-dom'

import createBrowserHistory from 'history/createBrowserHistory'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/';

import './index.css';

const customHistory = createBrowserHistory()

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const Routes = ({history}) => {
  return (
    <div>
      <Paper className="Menu">
        <Menu>
          <MenuItem
            disabled={history.location.pathname === '/home'}
            containerElement={
              <Link to="/home" />
            }
            primaryText="Home"/>
            <MenuItem
            disabled={history.location.pathname === '/search'}
            containerElement={
              <Link to="/search" />
            }
            primaryText="Map"/>
        </Menu>
      </Paper>
      <Route path="/home" component={Home}/>
      <Route path="/search" component={App}/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={customHistory}>
        <Routes history={customHistory} />
      </Router>
    </MuiThemeProvider>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
