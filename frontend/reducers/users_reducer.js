import * as ACTIONS from '../actions/user_actions.js';
import { UserConstants } from '../actions/user_actions.js';

const _default = {
  allUsers: [],
  followedUsers: []
};

const UsersReducer = (state = _default, action) => {
  switch (action.type) {
    case UserConstants.RECEIVE_ALL_USERS:
      return Object.assign({}, state, {allUsers: action.users});
    case UserConstants.RECEIVE_FOLLOWED_USERS:
      return Object.assign({}, state, {followedUsers: action.users});
    default:
      return state;
  }
};


export default UsersReducer;
