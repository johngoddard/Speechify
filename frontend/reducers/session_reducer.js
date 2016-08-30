import { SessionConstants } from '../actions/session_actions.js';
import { merge } from 'lodash';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state=_nullUser, action) => {
  switch (action.type) {
    case SessionConstants.RECEIVE_CURRENT_USER:
      return merge({}, _nullUser, {currentUser: action.user});
    case SessionConstants.LOGOUT:
      return merge({}, _nullUser, {currentUser: null});
    default:
      return state;
  }
};

export default SessionReducer;
