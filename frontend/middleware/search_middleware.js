import {SearchConstants} from '../actions/search_actions.js';
import * as ACTIONS from '../actions/search_actions.js';
import * as UTIL from '../util/search_utils.js';

const SearchMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case SearchConstants.FETCH_SEARCH_RESULTS:
      let success = results => dispatch(ACTIONS.receiveSearchResults(results));
      UTIL.fetchSearchResults(action.query, success);
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
