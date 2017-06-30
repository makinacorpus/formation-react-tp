import React from 'react';
import Nominatim from './components/Nominatim/';
import Map from './components/Map/';

import RefreshIndicator from 'material-ui/RefreshIndicator';

import { updateSearch, loadNominatimResults } from './store/nominatim/actions';
import { loadOverpassResults } from './store/overpass/actions';
import { connect } from 'react-redux';

import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export class AppView extends React.Component {
  inputUncontrolled = {};

  handleInput = (input) => {
    this.inputUncontrolled = input;
  }

  render() {
    return (
      <div className="App">
        <Nominatim
          handleSubmitControlled={this.props.loadResults.bind(this)}
          handleSubmitUncontrolled={() => {
            this.props.updateSearch(this.inputUncontrolled.value);
            this.props.loadResults();
          }}
          handleChange={this.props.updateSearch.bind(this)}
          handleInput={this.handleInput}
          inputValue={this.props.nominatim.search}
        />

        <Map
          id="map"
          dataMarkers={this.props.nominatim.results}
          dataGeojson={this.props.overpass.results}
          changeBBox={this.props.handleChangeBBox}
        />

        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          loadingColor="#FF9800"
          status={this.props.nominatim.loading}
          style={{
            display: 'inline-block',
            position: 'absolute',
            zIndex: 10000,
            top: '1rem',
            right: '1rem',
            left: 'unset',
            transform: 'unset'
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nominatim: state.nominatim,
    overpass: state.overpass
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateSearch: search => dispatch(updateSearch(search)),
    loadResults: () => dispatch(loadNominatimResults()),
    handleChangeBBox: (bbox) => dispatch(loadOverpassResults(bbox))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
