import axios from 'axios';
import osmtogeojson from 'osmtogeojson';

const OVERPASS_URL = 'http://overpass-api.de/api/interpreter?'
const DEFAULT_QUERY = 'data=[out:xml];(way[%22leisure%22=%22park%22](43.54506428956427,1.3108062744140625,43.663525432098275,1.571388244628906););out%20body;%3E;out%20skel%20qt;';

class OverpassService {
  getOverpassData() {
    return axios.get(OVERPASS_URL + DEFAULT_QUERY)
      .then(function (response) {
        var osmGeojson = osmtogeojson(new DOMParser().parseFromString(response.data, 'text/xml'));
        return osmGeojson;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new OverpassService();
