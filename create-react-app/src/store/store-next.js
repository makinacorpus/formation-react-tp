import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import {loggerMadeByHand} from '../middlewares/loggerMadeByHand';
import { nominatimMiddleware } from '../middlewares/nominatim';
import nominatim, {defaultState} from './nominatim/reducers';
import overpass from './overpass/reducers';

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

const exampleInitialState = {
  defaultState
}

export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducers, initialState, enhancer)
}
