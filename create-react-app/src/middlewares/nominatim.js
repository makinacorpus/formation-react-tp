import nominatimService from '../services/nominatim';
import { setNominatimResults } from '../store/nominatim/actions';

export const nominatimMiddleware = store => next => action => {
  if (action.nominatim !== true) return next(action);
  return nominatimService.getNominatimData(store.getState().nominatim.search)
            .then((markers) => store.dispatch(setNominatimResults(markers)));
}

