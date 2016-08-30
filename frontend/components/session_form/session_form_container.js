import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import * as ACTIONS from '../../actions/session_actions.js';


const mapStateToProps = (state, ownProps) =>({
  formType: ownProps.formType,
  loggedIn: Boolean(state.session.currentUser)
});

const mapDispatchToProps = (dispatch, ownProps)=> {
  const processForm = (ownProps.formType === 'login') ? ACTIONS.login : ACTIONS.signup;

  return {
    processForm: user => dispatch(processForm(user)),
    closeModal: () => ownProps.closeModal(),
    toggleForm: () => ownProps.toggleForm()
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
