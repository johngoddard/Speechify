import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form.jsx';
import * as ACTIONS from '../../actions/session_actions.js';


const mapStateToProps = (state) =>({
  loggedIn: Boolean(state.session.currentUser),
});

const mapDispatchToProps = (dispatch, ownProps)=> {
  const formType = ownProps.location.pathname.slice(1);
  const processForm = (formType === 'login') ? ACTIONS.login : ACTIONS.signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
