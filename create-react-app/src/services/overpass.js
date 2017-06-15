import axios from 'axios';
import osmtogeojson from 'osmtogeojson';

const OVERPASS_URL = 'http://overpass-api.de/api/interpreter?';
const DEFAULT_BBOX = '43.54506428956427,1.3108062744140625,43.663525432098275,1.571388244628906';

function getQuery(bbox = DEFAULT_BBOX) {
    let bboxString = '';
    if (bbox === DEFAULT_BBOX)
        bboxString = DEFAULT_BBOX;
    else
        bboxString =
            bbox.getSouth() + ',' +
            bbox.getWest() + ',' +
            bbox.getNorth() + ',' +
            bbox.getEast();

    return 'data=[out:xml];(way[%22leisure%22=%22park%22]('
        + bboxString
        + '););out%20body;%3E;out%20skel%20qt;';
}

class OverpassService {
  getOverpassData(bbox) {
    return axios.get(OVERPASS_URL + getQuery(bbox))
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
