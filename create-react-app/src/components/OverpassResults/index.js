import React from 'react';
import axios from 'axios';
import osmtogeojson from 'osmtogeojson';

class OverpassResults extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  getOverpassData() {
    return axios.get('http://overpass-api.de/api/interpreter?data=[out:xml];(way[%22leisure%22=%22park%22](43.54506428956427,1.3108062744140625,43.663525432098275,1.571388244628906););out%20body;%3E;out%20skel%20qt;')
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  getGeoJSONFromOverpass() {
    return this.getOverpassData()
      .then((data) => {
        return osmtogeojson(new DOMParser().parseFromString(data, 'text/xml'));
      });
  }

  componentWillMount() {
    this.getGeoJSONFromOverpass()
      .then((data) => {
        this.setState({data: JSON.stringify(data)})
      });
  }

  render() {
    return (
      <div className="OverpassResults">
        { this.state.data }
      </div>
    );
  }
}

export default OverpassResults;
