import { LoadingConstants } from '../actions/loading_actions.js';

const _default = {
  loading: false,
  searchLoading: false
};

const LoadingReducer = (state = _default, action) => {
  switch (action.type) {
    case LoadingConstants.START_LOADING:
      return Object.assign({}, state, {loading: true});
    case LoadingConstants.STOP_LOADING:
      return Object.assign({}, state, {loading: false});
    case LoadingConstants.START_SEARCH_LOADING:
      return Object.assign({}, state, {searchLoading: true});
    case LoadingConstants.STOP_SEARCH_LOADING:
      return Object.assign({}, state, {searchLoading: false});
    default:
      return state;
  }
};

export default LoadingReducer;
