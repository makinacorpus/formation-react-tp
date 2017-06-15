import { createStore, combineReducers, compose } from 'redux';

import nominatim from './nominatim/reducers';
import overpass from './overpass/reducers';

let enhancerArray = [];

if (process.env.NODE_ENV !== 'production') {
  enhancerArray.push(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}

const enhancer = compose(...enhancerArray);
const store = createStore(
  combineReducers({
    nominatim,
    overpass
  }),
  enhancer
);

window.store = store;

store.dispatch({
  type: 'SET_SEARCH',
  payload: 'Toulouse'
});

export default store;
