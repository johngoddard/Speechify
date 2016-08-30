import { SessionConstants } from '../actions/session_actions.js';
import * as ACTIONS from '../actions/session_actions.js';
import * as UTIL from '../util/session_api_util.js';



const SessionMiddleware = ({getState, dispatch}) => next => action => {
  const success = user => dispatch(ACTIONS.receiveCurrentUser(user));
  const error = errors => dispatch(ACTIONS.receiveErrors(errors));

  switch (action.type) {
    case SessionConstants.LOGIN:
      UTIL.login(action.user, success, error);
      return next(action);
    case SessionConstants.SIGNUP:
      UTIL.signup(action.user, success, error);
      return next(action);
    case SessionConstants.LOGOUT:
      UTIL.logout();
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
