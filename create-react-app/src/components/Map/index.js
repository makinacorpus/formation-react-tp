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
    this.geojson = {};
  }

  removeMarkers() {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
  }

  displayMarkers(data) {
    this.removeMarkers();
    this.markers = data.map(item => L.marker([item.lat, item.lon]).addTo(this.map).bindPopup(item.display_name));
    if (data[0]) {
      this.map.setView([data[0].lat, data[0].lon]);
    }
  }

  displayGeoJSON(geojson) {
    if (typeof this.geojson === L.GeoJSON)
      this.geojson.removeFrom(this.map);
    this.geojson = L.geoJSON(geojson).addTo(this.map);
  }

  dispatchBBox(bbox) {
    this.props.changeBBox && this.props.changeBBox(bbox);
  }

  componentDidMount() {
    this.map = L.map(this.props.id).setView([43.604268, 1.441019], 13);

    this.map.on('zoomend moveend', () => this.dispatchBBox(this.map.getBounds()));
    this.dispatchBBox(this.map.getBounds());

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    !!this.props.dataMarkers && this.displayMarkers(this.props.dataMarkers);
    !!this.props.dataGeojson && this.displayGeoJSON(this.props.dataGeojson);

  }

  componentWillReceiveProps(nextProps) {
    const markerChanged = (this.props.dataMarkers[0] && this.props.dataMarkers[0].display_name) !== (nextProps.dataMarkers[0] && nextProps.dataMarkers[0].display_name);

    markerChanged && this.displayMarkers(nextProps.dataMarkers);
    !!this.props.dataGeojson !== nextProps.dataGeojson && this.displayGeoJSON(nextProps.dataGeojson);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return <div id={this.props.id} />;
  }
}

export default Map;
