import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import * as SESSION_ACTIONS from '../../actions/session_actions.js';
import * as FORM_ACTIONS from '../../actions/form_actions.js';
import * as PLAYLIST_ACTIONS from '../../actions/playlist_actions.js';



const mapStateToProps = (state, ownProps) =>({
  formType: ownProps.formType,
  currentUser: state.session.currentUser,
  errors: state.forms.session.errors,
  demo: ownProps.demo
});

const mapDispatchToProps = (dispatch, ownProps)=> {
  const processForm = (ownProps.formType === 'login') ? SESSION_ACTIONS.login : SESSION_ACTIONS.signup;

  return {
    processForm: user => dispatch(processForm(user)),
    closeModal: () => ownProps.closeModal(),
    toggleForm: () => ownProps.toggleForm(),
    fetchCurrentUserPlaylists: user => dispatch(PLAYLIST_ACTIONS.fetchCurrentUserPlaylists(user)),
    clearErrors: () => dispatch(FORM_ACTIONS.clearSessionErrors())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
