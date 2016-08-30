import { FormConstants } from '../actions/form_actions.js';
import { merge } from 'lodash';

const _default = {
  session: {errors: []}
};

const FormReducer = (state=_default, action) => {
  switch (action.type) {
    case FormConstants.RECEIVE_SESSION_ERRORS:
      return merge({}, state, {session: {errors: action.errors.responseJSON}});
    case FormConstants.CLEAR_SESSION_ERRORS:
      return Object.assign({}, state, {session: {errors: []}});
    default:
    return state;
  }
};

export default FormReducer;
