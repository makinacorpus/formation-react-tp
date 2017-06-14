import axios from 'axios';

const NOMINATIM_URL = 'http://nominatim.openstreetmap.org/search/'
const DEFAULT_QUERY = 'toulouse';
const DEFAULT_FORMAT = '?format=json';

class NominatimService {
  getNominatimData() {
    return axios.get(NOMINATIM_URL + DEFAULT_QUERY + DEFAULT_FORMAT)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}

export default new NominatimService();
