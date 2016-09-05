import { AudioConstants } from '../actions/audio_actions.js';
import * as ACTIONS from '../actions/audio_actions.js';
import { merge } from 'lodash';

const _default = {
  playing: false,
  track: {}
};

const AudioReducer = (state = _default, action) => {
  switch (action.type) {
    case AudioConstants.PLAY_TRACK:
      return Object.assign({}, state, {playing: true});
    case AudioConstants.PAUSE_TRACK:
      return Object.assign({}, state, {playing: false});
    case AudioConstants.SET_CURRENT_TRACK:
      return Object.assign({}, state, { track: action.track });
    default:
      return state;
  }
};

export default AudioReducer;
