import { PlaylistConstants } from '../actions/playlist_actions.js';
import * as ACTIONS from '../actions/playlist_actions.js';
import { arrayToObject, sortTracks } from '../util/array_utils.js';
import { merge } from 'lodash';

const _default = {
  createdPlaylists: {},
  allPlaylists: [],
  followedPlaylists: []
};

const PlaylistReducer = (state = _default, action) => {
  switch (action.type) {
    case PlaylistConstants.RECEIVE_ALL_PLAYLISTS:
      return merge({}, state, {allPlaylists: action.playlists});
    case PlaylistConstants.RECEIVE_CURR_USER_PLAYLISTS:
      let playsToAdd = action.playlists;
      playsToAdd.forEach(playlist => {
        playlist.tracks = sortTracks(playlist.tracks, playlist.order);
      });
      return Object.assign({}, state, {createdPlaylists: arrayToObject(playsToAdd)});
    case PlaylistConstants.RECEIVE_CURR_PLAYLIST:
      let newCreated = merge({}, state.createdPlaylists);
      let toAdd = action.playlist;
      toAdd.tracks = sortTracks(action.playlist.tracks, action.playlist.order);
      newCreated[action.playlist.id] = toAdd;
      return Object.assign({}, state, {createdPlaylists: newCreated});
    case PlaylistConstants.REMOVE_CURR_PLAYLIST:
      let currPlaylists = merge({}, state.createdPlaylists);
      delete currPlaylists[action.playlistId];
      return Object.assign({}, state, {createdPlaylists: currPlaylists});
    case PlaylistConstants.RECEIVE_FOLLOWED_PLAYLISTS:
      return Object.assign({}, state, {followedPlaylists: action.playlists});
    case PlaylistConstants.REMOVE_FOLLOWED_PLAYLIST:
      let newFollowed = state.followedPlaylists.filter(playlist => playlist.id !== action.playlist.id);
      return Object.assign({}, state, {followedPlaylists: newFollowed});
    case PlaylistConstants.RECEIVE_FOLLOWED_PLAYLIST:
      let addedFollowed = [...state.followedPlaylists, action.playlist];
      return Object.assign({}, state, {followedPlaylists: addedFollowed});
    default:
      return state;
  }
};

export default PlaylistReducer;
