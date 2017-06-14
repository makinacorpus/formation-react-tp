import React from 'react';
import L from 'leaflet';

import 'leaflet/dist/leaflet.css';
import './style.css';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.markers = [];
    this.map = {};
  }

  removeMarkers() {
    this.markers.forEach(marker => marker.removeFrom(this.map));
  }

  displayMarkers(markers) {
    this.removeMarkers();
    markers.forEach(marker => {
      this.markers.push(
        L.marker([marker.lat, marker.lon])
          .addTo(this.map)
          .bindPopup(marker.display_name)
      );
    })
  }

  componentDidMount() {
    this.map = L.map(this.props.id).setView([43.604268, 1.441019], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    this.props.markers && this.displayMarkers(this.props.markers);

  }

  componentWillReceiveProps(nextProps) {
    this.props.markers !== nextProps.markers && this.displayMarkers(nextProps.markers);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default Map;
