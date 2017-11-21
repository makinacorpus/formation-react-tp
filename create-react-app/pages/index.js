import React from 'react'
import { bindActionCreators } from 'redux'
import { initStore } from '../src/store/store-next'
import withRedux from 'next-redux-wrapper'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import { loadNominatimResults } from '../src/store/nominatim/actions';
import NominatimResults from '../src/components/Nominatim/NominatimResults';

class Nominatim extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    await store.dispatch(loadNominatimResults())
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <p>Nominatim recherche pour : {this.props.nominatim.search}</p>
          <NominatimResults data={this.props.nominatim.results} />
        </div>
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
