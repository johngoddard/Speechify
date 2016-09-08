import { SessionConstants } from '../actions/session_actions.js';
import * as SESSION_ACTIONS from '../actions/session_actions.js';
import * as FORM_ACTIONS from '../actions/form_actions.js';
import * as UTIL from '../util/session_api_util.js';

const SessionMiddleware = ({getState, dispatch}) => next => action => {

  console.log(action);
  const success = user => dispatch(SESSION_ACTIONS.receiveCurrentUser(user));
  const error = errors => dispatch(FORM_ACTIONS.receiveSessionErrors(errors));

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
    case SessionConstants.UPDATE_CURRENT_USER:
      const error2 = errors => dispatch(FORM_ACTIONS.receiveUserErrors);
      UTIL.updateCurrentUser(action.user, success, error2);
      return next(action);
    default:
      next(action);
  }
};

export default SessionMiddleware;
