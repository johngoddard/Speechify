import { AudioConstants } from '../actions/audio_actions.js';
import * as ACTIONS from '../actions/audio_actions.js';
import { merge } from 'lodash';

const _default = {
  playing: false,
  playQueue:  [],
  playedTracks: [],
  track: {}
};

const AudioReducer = (state = _default, action) => {
  let newQueue;
  let newPlayed;
  let newTrack;

  switch (action.type) {
    case AudioConstants.PLAY_TRACK:
      return Object.assign({}, state, {playing: true});
    case AudioConstants.PAUSE_TRACK:
      return Object.assign({}, state, {playing: false});
    case AudioConstants.SET_CURRENT_TRACK:
      if(state.track.id){
        newPlayed = [...state.playedTracks, state.track];
        return Object.assign({}, state, { track: action.track, playedTracks: newPlayed });
      } else{
        return Object.assign({}, state, { track: action.track });
      }
    case AudioConstants.ADD_TO_QUEUE:
      newQueue = [...state.playQueue, action.track];
      return Object.assign({}, state, {playQueue: newQueue});

    case AudioConstants.GO_BACK:
      if(state.playedTracks.length > 0 && state.track.id){
        newPlayed = state.playedTracks.slice(0,-1);
        newTrack = state.playedTracks.slice(-1)[0];
        newQueue = [state.track, ...state.playQueue ];
        return Object.assign({}, state, {playQueue: newQueue, track: newTrack, playedTracks: newPlayed});
      } else{
        return state;
      }
    case AudioConstants.GO_FORWARD:
      if(state.playQueue.length > 0 && state.track.id){
        newTrack = state.playQueue[0];
        newQueue = state.playQueue.slice(1);
        newPlayed = [...state.playedTracks, state.track];
        return Object.assign({}, state, {playQueue: newQueue, track: newTrack, playedTracks: newPlayed});
      } else {
        return state;
      }
    case AudioConstants.SET_QUEUE_POSITION:
      newQueue = state.playQueue.slice(action.pos + 1);
      return Object.assign({}, state, {playQueue: newQueue});
    case AudioConstants.PLAY_PLAYLIST:
      let start = action.startIdx || 0;
      newTrack = action.playlist.tracks.slice(start,start+1)[0];
      newQueue = [...state.playQueue, ...action.playlist.tracks.slice(start+1)];
      newPlayed = state.track.id ? [...state.playedTracks, state.track] : [];
      return Object.assign({}, state, {playQueue: newQueue, track: newTrack, playedTracks: newPlayed, playing: true});
    default:
      return state;
  }
};

export default AudioReducer;
