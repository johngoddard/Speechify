import { TrackConstants } from '../actions/track_actions.js';
import {arrayToObject} from '../util/array_utils.js';
import { merge } from 'lodash';

const _default = {
  tracks: {}
};

const TrackReducer = (state = _default, action) => {
  switch (action.type) {
    case TrackConstants.RECEIVE_ALL_TRACKS:
      const newState = arrayToObject(action.tracks);
      return newState;
    case TrackConstants.RECEIVE_SINGLE_TRACK:
      return merge({}, state, {[action.track.id]: action.track});
    case  TrackConstants.removeTrack:
      let toReturn = merge({}, state);
      delete toReturn[action.track.id];
      return toReturn;
    default:
      return state;
  }
};

export default TrackReducer;
