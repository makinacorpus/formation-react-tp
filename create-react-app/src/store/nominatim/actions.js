export const SET_SEARCH = 'SET_SEARCH';
export const FETCH_RESULTS_NOMINATIM = 'FETCH_RESULTS_NOMINATIM';
export const SET_RESULTS_NOMINATIM = 'SET_RESULTS_NOMINATIM';


export const updateSearch = (search) => {
  return {
    type: SET_SEARCH,
    payload: search
  }
}

export const fetchNominatimResults = () => {
  return {
    type: FETCH_RESULTS_NOMINATIM
  }
}

export const setNominatimResults = (results) => {
  return {
    type: SET_RESULTS_NOMINATIM,
    payload: results
  }
}
