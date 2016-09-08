import { LoadingConstants } from '../actions/loading_actions.js';

const _default ={
  loading: false
};

const LoadingReducer = (state = _default, action) => {
  switch (action.type) {
    case LoadingConstants.START_LOADING:
      return true;
    case LoadingConstants.STOP_LOADING:
      return false;
    default:
      return state;
  }
};

export default LoadingReducer;
