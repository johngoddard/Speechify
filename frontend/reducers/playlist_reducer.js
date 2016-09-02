import { PlaylistConstants } from '../actions/playlist_actions.js';
import { arrayToObject } from '../util/array_utils.js';
import { merge } from 'lodash';

const _default = {
  createdPlaylists: {},
  allPlaylists: [],
  playlistDetail: {}
};

const PlaylistReducer = (state = _default, action) => {
  switch (action.type) {
    case PlaylistConstants.RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, {allPlaylists: action.playlists});
    case PlaylistConstants.RECEIVE_CURR_USER_PLAYLISTS:
      return Object.assign({}, state, {createdPlaylists: arrayToObject(action.playlists)});
    case PlaylistConstants.RECEIVE_CURR_PLAYLIST:
      let newCreated = merge({}, state.createdPlaylists);
      newCreated[action.playlist.id] = action.playlist;
      return merge({}, state, {createdPlaylists: newCreated});
    case PlaylistConstants.RECEIVE_PLAYLIST_DETAIL:
      return Object.assign({}, state, {playlistDetail: action.playlist});
    default:
      return state;
  }
};

export default PlaylistReducer;
