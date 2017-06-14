import React from 'react';
import overpassService from '../../services/overpass';

import Map from '../Map';

import './style.css';

class OverpassResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount() {
    overpassService.getOverpassData()
      .then((data) => {
        this.setState({data: data})
      });
  }

  render() {
    return (
      <div className="OverpassResults">
        <Map id="map-overpass" geojson={this.state.data} />
        {JSON.stringify(this.state.data)}
      </div>
    );
  }
}

export default OverpassResults;
