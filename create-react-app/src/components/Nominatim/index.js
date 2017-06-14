import React from 'react';
import nominatimService from '../../services/nominatim';

import NominatimForm from './NominatimForm';
import NominatimResults from './NominatimResults';

class Nominatim extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: 'Toulouse'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.getNominatimData(this.state.value);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.getNominatimData(this.state.value);
  }
  getNominatimData(search) {
    nominatimService.getNominatimData(search)
      .then((data) => this.setState({data: data}));
  }
  render() {
    return (
      <div className="Nominatim">
        <NominatimForm
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          inputValue={this.state.value}
        />
        <NominatimResults data={this.state.data} />
      </div>
    );
  }
}

export default Nominatim;
