import React from 'react';
import nominatimService from '../../services/nominatim';

import NominatimForm from './NominatimForm';
import NominatimFormUncontrolled from './NominatimFormUncontrolled';
import NominatimResults from './NominatimResults';

import Map from '../Map';

class Nominatim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: 'Toulouse'
    }
    this.input = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitControlled = this.handleSubmitControlled.bind(this);
    this.handleSubmitUncontrolled = this.handleSubmitUncontrolled.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  componentWillMount() {
    this.getNominatimData(this.state.value);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleInput(input) {
    this.input = input;
  }
  handleSubmitControlled(e) {
    e.preventDefault();
    this.getNominatimData(this.state.value);
  }
  handleSubmitUncontrolled(e) {
    e.preventDefault();
    this.getNominatimData(this.input.value);
  }
  getNominatimData(search) {
    nominatimService.getNominatimData(search)
      .then((data) => this.setState({data: data}));
  }
  render() {
    return (
      <div className="Nominatim">
        <NominatimForm
          handleSubmit={this.handleSubmitControlled}
          handleChange={this.handleChange}
          inputValue={this.state.value}
        />
        <NominatimFormUncontrolled
          handleSubmit={this.handleSubmitUncontrolled}
          inputValue={this.state.value}
          handleInput={this.handleInput}
        />
        <NominatimResults data={this.state.data} />
        {
          this.state.data.length > 0 &&
          <Map id="map-nominatim" markers={this.state.data} />
        }
      </div>
    );
  }
}

export default Nominatim;
