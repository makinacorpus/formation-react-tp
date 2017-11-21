import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import {loggerMadeByHand} from '../middlewares/loggerMadeByHand';
import { nominatimMiddleware } from '../middlewares/nominatim';
import nominatim from './nominatim/reducers';
import overpass from './overpass/reducers';
import { loadNominatimResults } from './nominatim/actions';

let enhancerArray = [
  applyMiddleware(thunk, nominatimMiddleware)
];

export const reducers = combineReducers({
  nominatim,
  overpass
});

const enhancer = compose(...enhancerArray);
const store = createStore(
  reducers,
  enhancer
);

store.dispatch(loadNominatimResults());

const exampleInitialState = {
  nominatim: {
    search: 'Toulouse'
  }
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducers, initialState, enhancer)
}
