import { TrackConstants }from '../actions/track_actions.js';
import * as ACTIONS from '../actions/track_actions.js';
import * as UTIL from '../util/track_api_util.js';
import * as FORM_ACTIONS from '../actions/form_actions.js';

const TrackMiddleWare = ({getState, dispatch}) => next => action => {
  let success = track => dispatch(ACTIONS.receiveSingleTrack(track));
  let error = errors => dispatch(FORM_ACTIONS.receiveTrackErrors(errors));

  switch (action.type) {
    case TrackConstants.FETCH_ALL_TRACKS:
      success = tracks => dispatch(ACTIONS.receiveAllTracks(tracks));
      UTIL.fetchAllTracks(success, error);
      return next(action);
    case TrackConstants.CREATE_TRACK:
      UTIL.createTrack(action.track, success, error);
      return next(action);
    case TrackConstants.UPDATE_TRACK:
      UTIL.updateTrack(action.track, success, error);
      return next(action);
    case TrackConstants.DESTROY_TRACK:
      success = track => dispatch(ACTIONS.removeTrack(track));
      UTIL.updateTrack(action.track, success, error);
      return next(action);
    default:
      next(action);
  }
};

export default TrackMiddleWare;
