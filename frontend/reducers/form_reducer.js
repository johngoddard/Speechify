import { FormConstants } from '../actions/form_actions.js';
import { merge } from 'lodash';

const _default = {
  session: {errors: []},
  user: {errors: []},
  track: {errors: []},
  playlist: {errors: []}
};

const FormReducer = (state=_default, action) => {
  switch (action.type) {
    case FormConstants.RECEIVE_SESSION_ERRORS:
      return merge({}, state, {session: {errors: action.errors.responseJSON}});
    case FormConstants.CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, {session: {errors: []}});
    case FormConstants.RECEIVE_USER_ERRORS:
      return merge({}, state, {user: {errors: action.errors.responseJSON}});
    case FormConstants.CLEAR_USER_ERRORS:
      return Object.assign({}, state, {user: {errors: []}});
    case FormConstants.RECEIVE_TRACK_ERRORS:
      return merge({}, state, {track: {errors: action.errors.responseJSON}});
    case FormConstants.CLEAR_TRACK_ERRORS:
      return Object.assign({}, state, {track: {errors: []}});
    case FormConstants.RECEIVE_PLAYLIST_ERRORS:
      return merge({}, state, {playlist: {errors: action.errors.responseJSON}});
    case FormConstants.CLEAR_PLAYLIST_ERRORS:
      return Object.assign({}, state, {playlist: {errors: []}});
    default:
    return state;
  }
};

export default FormReducer;
