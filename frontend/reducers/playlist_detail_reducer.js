import { PlaylistConstants } from '../actions/playlist_actions.js';
import * as ACTIONS from '../actions/playlist_actions.js';
import { arrayToObject, sortTracks } from '../util/array_utils.js';
import { merge } from 'lodash';

const _default = {
  playlistDetail: {}
};

const PlaylistDetailReducer = (state = _default, action) => {
  switch(action.type){
    case PlaylistConstants.RECEIVE_PLAYLIST_DETAIL:
      action.playlist.tracks = sortTracks(action.playlist.tracks, action.playlist.order);
      return action.playlist;
    case PlaylistConstants.REMOVE_PLAYLIST_DETAIL_TRACK:
      let currDetail = merge({}, state);
      currDetail.tracks = currDetail.tracks.filter(track => track.id !== action.trackId);
      return currDetail;
    default:
      return state;
  }
};

export default PlaylistDetailReducer;
