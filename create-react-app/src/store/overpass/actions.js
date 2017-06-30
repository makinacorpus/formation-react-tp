import overpassService from '../../services/overpass';

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

export const setOverpassResults = (results) => {
  return {
    type: SET_RESULTS_OVERPASS,
    payload: results
  }
}

export const loadOverpassResults = (bbox) => {
  return (dispatch, getState) => {
    dispatch(updateBbox(bbox));
    dispatch(fetchOverpassResults());
      return overpassService.getOverpassData(getState().overpass.bbox)
        .then((geojson) => {
          dispatch(setOverpassResults(geojson))
        });
  }
}
