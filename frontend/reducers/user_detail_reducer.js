import * as ACTIONS from '../actions/user_actions.js';
import {UserConstants} from '../actions/user_actions.js';
import {merge} from 'lodash';

const _default = {
  userDetail: {}
};

const UserDetailReducer = (state = _default, action) => {
  switch (action.type) {
    case UserConstants.RECEIVE_USER_DETAIL:
      return Object.assign({}, state, {userDetail: action.user});
    case UserConstants.TOGGLE_USER_DETAIL_FOLLOW:
      let newUserDetail = merge({}, state);
      newUserDetail.follows = action.status;
      return Object.assign({}, state, {userDetail: newUserDetail});
    default:
      return state;
  }
};


export default UserDetailReducer;
