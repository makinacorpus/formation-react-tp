import React from 'react';
import Nominatim from './components/Nominatim/';
import Map from './components/Map/';

import nominatimService from './services/nominatim';
import overpassService from './services/overpass';

import RefreshIndicator from 'material-ui/RefreshIndicator';

import { connect } from 'react-redux';

import './App.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export class AppView extends React.Component {
  state = {
    search: 'Toulouse',
    markers: [],
    geojson: undefined,
    loading: 'hide',
    bbox: undefined
  };
  inputUncontrolled = {};

  componentWillMount() {
    this.getNominatimData(this.state.search);
  }
  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }
  handleInput = (input) => {
    this.inputUncontrolled = input;
  }
  handleSubmitControlled = (e) => {
    e.preventDefault();
    this.getNominatimData(this.state.search);
  }
  handleSubmitUncontrolled = (e) => {
    e.preventDefault();
    this.getNominatimData(this.inputUncontrolled.value);
  }
  handleChangeBBox = (bbox) => {
    this.setState({ bbox: bbox}, this.getGeoJSONData);
  }
  getNominatimData(search) {
    nominatimService.getNominatimData(search)
      .then((markers) => this.setState({markers: markers}));
  }
  getGeoJSONData() {
    this.setState({ loading: 'loading' });
    overpassService.getOverpassData(this.state.bbox)
      .then((geojson) => {
        this.setState({
          geojson: geojson,
          loading: 'hide'
        })
      });
  }

  render() {
    return (
      <div className="App">
        <Nominatim
          handleSubmitControlled={this.handleSubmitControlled}
          handleSubmitUncontrolled={this.handleSubmitUncontrolled}
          handleChange={this.handleChange}
          handleInput={this.handleInput}
          inputValue={this.state.search}
          data={this.state.markers}
        />

        <Map
          id="map"
          dataMarkers={this.state.markers}
          dataGeojson={this.state.geojson}
          changeBBox={this.handleChangeBBox}
        />

        <RefreshIndicator
          size={50}
          left={70}
          top={0}
          loadingColor="#FF9800"
          status={this.state.loading}
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
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppView);
