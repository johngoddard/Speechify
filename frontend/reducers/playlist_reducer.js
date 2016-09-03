import { PlaylistConstants } from '../actions/playlist_actions.js';
import * as ACTIONS from '../actions/playlist_actions.js';
import { arrayToObject, sortTracks } from '../util/array_utils.js';
import { merge } from 'lodash';

const _default = {
  createdPlaylists: {},
  allPlaylists: [],
  playlistDetail: {},
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
    case PlaylistConstants.RECEIVE_PLAYLIST_DETAIL:
      action.playlist.tracks = sortTracks(action.playlist.tracks, action.playlist.order);
      return Object.assign({}, state, {playlistDetail: action.playlist});
    case PlaylistConstants.REMOVE_CURR_PLAYLIST:
      let currPlaylists = merge({}, state.createdPlaylists);
      delete currPlaylists[action.playlistId];
      return Object.assign({}, state, {createdPlaylists: currPlaylists});
    case PlaylistConstants.REMOVE_PLAYLIST_DETAIL_TRACK:
      let currDetail = merge({}, state.playlistDetail);
      currDetail.tracks = currDetail.tracks.filter(track => track.id !== action.trackId);
      return Object.assign({}, state, {playlistDetail: currDetail});
    case PlaylistConstants.RECEIVE_FOLLOWED_PLAYLISTS:
      let followed = action.playlists.sort((p1, p2) => {
        Date.parse(p1) - Date.parse(p2);
      });
      return Object.assign({}, state, {followedPlaylists: followed});
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
