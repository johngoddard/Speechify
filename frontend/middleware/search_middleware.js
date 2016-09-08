import {SearchConstants} from '../actions/search_actions.js';
import * as ACTIONS from '../actions/search_actions.js';
import * as UTIL from '../util/search_utils.js';
import * as LOADING_ACTIONS from '../actions/loading_actions.js';


const SearchMiddleware = ({getState, dispatch}) => next => action => {
  switch (action.type) {
    case SearchConstants.FETCH_SEARCH_RESULTS:
      let success = results => {
        dispatch(ACTIONS.receiveSearchResults(results));
        dispatch(LOADING_ACTIONS.stopSearchLoading());
      };
      let error = results => {
        dispatch(LOADING_ACTIONS.stopSearchLoading());
      };
      UTIL.fetchSearchResults(action.query, success, error);
      dispatch(LOADING_ACTIONS.startSearchLoading());
      return next(action);
    default:
      return next(action);
  }
};

export default SearchMiddleware;
