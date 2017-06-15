import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import nominatim from './nominatim/reducers';
import overpass from './overpass/reducers';
import { loadNominatimResults } from './nominatim/actions';
import { loadOverpassResults } from './overpass/actions';

let enhancerArray = [
  applyMiddleware(thunk)
];

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

store.dispatch(loadNominatimResults());
store.dispatch(loadOverpassResults());

export default store;
