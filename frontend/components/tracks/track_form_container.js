import React from 'react';
import TrackForm from './track_form.jsx';
import { connect } from 'react-redux';
import * as ACTIONS from '../../actions/track_actions.js'
import * as FORM_ACTIONS from '../../actions/form_actions.js'

const mapStateToProps = (state, ownProps) => ({
  type: ownProps.type,
  track: ownProps.track,
  errors: state.forms.track.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const processForm = (ownProps.type === 'new') ? ACTIONS.createTrack : ACTIONS.updateTrack;

  return {
    processForm: track => dispatch(processForm(track)),
    closeModal: () => ownProps.closeModal(),
    clearErrors: () => dispatch(FORM_ACTIONS.clearTrackErrors())
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(TrackForm);
