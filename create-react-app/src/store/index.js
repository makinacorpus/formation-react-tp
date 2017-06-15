import { createStore, combineReducers } from 'redux';

import nominatim from './nominatim/reducers';
import overpass from './overpass/reducers';

export const store = createStore(combineReducers({
  nominatim,
  overpass
}));

window.store = store;

store.dispatch({
  type: 'SET_SEARCH',
  payload: 'Read the docs'
});

export default store;