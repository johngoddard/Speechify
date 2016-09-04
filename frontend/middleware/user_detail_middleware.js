import { UserConstants } from '../actions/user_actions.js';
import * as ACTIONS from '../actions/user_actions.js';
import * as UTIL from '../util/user_api_util';
import * as FORM_ACTIONS from '../actions/form_actions.js';

const UserDetailMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = errors => dispatch(FORM_ACTIONS.receiveSessionErrors(errors));

  switch (action.type) {
    case UserConstants.FETCH_USER_DETAIL:
      success = user => dispatch(ACTIONS.receiveUserDetail(user));
      UTIL.fetchAllUsers(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default UserDetailMiddleware;
