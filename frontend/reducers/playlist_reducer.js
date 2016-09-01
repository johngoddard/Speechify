import { PlaylistConstants } from '../actions/playlist_actions.js';
import { arrayToObject } from '../util/array_utils.js';
import { merge } from 'lodash';

const _default = {
  createdPlaylists: {},
  allPlaylists: {}
};

const PlaylistReducer = (state = _default, action) => {
  switch (action.type) {
    case PlaylistConstants.RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, {allPlaylists: action.playlists});
    case PlaylistConstants.RECEIVE_CURR_USER_PLAYLISTS:
      return merge({}, state, {createdPlaylists: arrayToObject(action.playlists)});
    case PlaylistConstants.RECEIVE_CURR_PLAYLIST:
      let newCreated = merge({}, state.createdPlaylists);
      newCreated[action.playlist.id] = action.playlist;
      return merge({}, state, {createdPlaylists: newCreated});
    default:
      return state;
  }
};

export default PlaylistReducer;
