import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/store/store-next'
import withRedux from 'next-redux-wrapper'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import NominatimResults from '../src/components/Nominatim/NominatimResults';

class Nominatim extends React.Component {
  static getInitialProps ({ store, isServer }) {
    return { isServer }
  }

  render () {
    return (
      <MuiThemeProvider>
        <p>Nominatim recherche pour : {this.props.nominatim.search}</p>
      </MuiThemeProvider>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nominatim: state.nominatim
  }
}

export default withRedux(initStore, mapStateToProps)(Nominatim)
