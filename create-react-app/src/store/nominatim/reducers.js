import {
  SET_SEARCH,
  FETCH_RESULTS_NOMINATIM,
  SET_RESULTS_NOMINATIM
} from './actions';

const defaultState = {
  search: 'Toulouse',
  results: [],
  loading: 'hide'
};

function nominatimReducer(state = defaultState, action) {
  switch (action.type) {
    case FETCH_RESULTS_NOMINATIM:
      return Object.assign({}, state, {
        loading: 'loading'
      });
    case SET_SEARCH:
      return Object.assign({}, state, {
        search: action.payload
      });
    case SET_RESULTS_NOMINATIM:
      return Object.assign({}, state, {
        results: action.payload,
        loading: 'hide'
      });
    default:
      return state
  }
}

export default nominatimReducer;
