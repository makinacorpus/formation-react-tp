import React from 'react';
import axios from 'axios';

class NominatimResults extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  getNominatimData() {
    return axios.get('http://nominatim.openstreetmap.org/search/toulouse?format=json')
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentWillMount() {
    this.getNominatimData()
      .then((data) => this.setState({
        data: data
      }));
  }

  render() {
    return (
      <ul className="NominatimResults">
        {this.state.data.map((currentResult, index) => (
          <li key={index}>{currentResult.display_name} ({currentResult.lat}, {currentResult.lon})</li>
        ))}
      </ul>
    );
  }
}

export default NominatimResults;
