import { UserConstants } from '../actions/user_actions.js';
import * as ACTIONS from '../actions/user_actions.js';
import * as UTIL from '../util/user_api_util';
import * as FORM_ACTIONS from '../actions/form_actions.js';
import * as LOADING_ACTIONS from '../actions/loading_actions.js';

const UserDetailMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = errors => {
    dispatch(FORM_ACTIONS.receiveSessionErrors(errors));
    dispatch(LOADING_ACTIONS.stopLoading());
  };

  switch (action.type) {
    case UserConstants.FETCH_USER_DETAIL:
      success = user => {
        dispatch(ACTIONS.receiveUserDetail(user));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      dispatch(LOADING_ACTIONS.startLoading());
      UTIL.fetchUserDetail(action.userId, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default UserDetailMiddleware;
