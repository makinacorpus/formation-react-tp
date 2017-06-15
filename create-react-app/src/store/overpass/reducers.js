import {
  SET_BBOX,
  FETCH_RESULTS_OVERPASS,
  SET_RESULTS_OVERPASS
} from './actions';

const defaultState = {
  bbox: undefined,
  results: [],
  loading: 'hide'
};

function nominatimReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_RESULTS_OVERPASS:
      return Object.assign({}, state, {
        loading: 'loading'
      });
    case SET_BBOX:
      return Object.assign({}, state, {
        bbox: action.payload
      });
    case SET_RESULTS_OVERPASS:
      return Object.assign({}, state, {
        results: action.payload,
        loading: 'hide'
      });
    default:
      return state
  }
}

export default nominatimReducer;
