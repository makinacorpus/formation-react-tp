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
import { I18nextProvider } from 'react-i18next';

import createBrowserHistory from 'history/createBrowserHistory'

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './store/';
import i18n from './services/i18n'; // initialized i18next instance

import './index.css';

const customHistory = createBrowserHistory()

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2>{i18n.t('home')}</h2>
      </div>
    )
  }
}

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
            disabled={history.location.pathname.includes('/search')}
            containerElement={
              <Link to="/search/Toulouse" />
            }
            primaryText="Map"/>
        </Menu>
      </Paper>
      <Route path="/home" component={Home}/>
      <Route path="/search/:address" component={App}/>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={ i18n }>
      <MuiThemeProvider>
        <Router history={customHistory}>
          <Routes history={customHistory} />
        </Router>
      </MuiThemeProvider>
    </I18nextProvider>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
