export const SET_BBOX = 'SET_BBOX';
export const FETCH_RESULTS_OVERPASS = 'FETCH_RESULTS_OVERPASS';
export const SET_RESULTS_OVERPASS = 'SET_RESULTS_OVERPASS';

export const updateBbox = (bbox) => {
  return {
    type: SET_BBOX,
    payload: bbox
  }
}

export const fetchOverpassResults = () => {
  return {
    type: FETCH_RESULTS_OVERPASS
  }
}

export const setOverpassResults = () => {
  return {
    type: SET_RESULTS_OVERPASS
  }
}
