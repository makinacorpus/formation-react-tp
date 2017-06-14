import React from 'react';
import nominatimService from '../../services/nominatim';

class NominatimResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    nominatimService.getNominatimData()
        .then((data) => this.setState({data: data}));
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
