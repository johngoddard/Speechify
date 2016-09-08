import { UserConstants } from '../actions/user_actions.js';
import * as ACTIONS from '../actions/user_actions.js';
import * as UTIL from '../util/user_api_util';
import * as FORM_ACTIONS from '../actions/form_actions.js';
import * as LOADING_ACTIONS from '../actions/loading_actions.js';

const UsersMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = errors => {
    dispatch(FORM_ACTIONS.receiveSessionErrors(errors));
    dispatch(LOADING_ACTIONS.stopLoading());
  };

  switch (action.type) {
    case UserConstants.FETCH_ALL_USERS:
      success = users => {
        dispatch(ACTIONS.receiveAllUsers(users));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      UTIL.fetchAllUsers(success, error);
      dispatch(LOADING_ACTIONS.startLoading());
      return next(action);
    case UserConstants.FETCH_FOLLOWED_USERS:
      success = users => {
        dispatch(ACTIONS.receiveFollowedUsers(users));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      UTIL.fetchFollowedUsers(success, error);
      dispatch(LOADING_ACTIONS.startLoading());
      return next(action);
    case UserConstants.FOLLOW_USER:
      UTIL.followUser(action.userId);
      return next(action);
    case UserConstants.UNFOLLOW_USER:
      UTIL.unfollowUser(action.userId);
      return next(action);
    default:
      return next(action);
  }
};

export default UsersMiddleware;
