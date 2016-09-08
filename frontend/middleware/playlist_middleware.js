import { PlaylistConstants } from '../actions/playlist_actions.js';
import * as ACTIONS from '../actions/playlist_actions.js';
import * as UTIL from '../util/playlist_api_util.js';
import * as FORM_ACTIONS from '../actions/form_actions.js';
import * as LOADING_ACTIONS from '../actions/loading_actions.js';

const PlaylistMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = errors => {
    dispatch(FORM_ACTIONS.receivePlaylistErrors(errors));
    dispatch(LOADING_ACTIONS.stopLoading());
  };

  switch (action.type) {
    case PlaylistConstants.FETCH_ALL_PLAYLISTS:
      success = playlists => {
        dispatch(ACTIONS.receiveAllPlaylists(playlists));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      UTIL.fetchAllPlaylists(success, error);
      dispatch(LOADING_ACTIONS.startLoading());
      return next(action);
    case PlaylistConstants.FETCH_CURR_USER_PLAYLISTS:
      success = playlists => {
        dispatch(ACTIONS.receiveCurrentUserPlaylists(playlists));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      UTIL.fetchCurrentUserPlaylists(action.user, success, error);
      dispatch(LOADING_ACTIONS.startLoading());
      return next(action);
    case PlaylistConstants.CREATE_PLAYLIST:
      success = playlist => dispatch(ACTIONS.receiveCurrPlaylist(playlist));
      UTIL.createPlaylist(action.playlist, success, error);
      return next(action);
    case PlaylistConstants.ADD_PLAYLIST_TRACK:
      success = playlist => dispatch(ACTIONS.receiveCurrPlaylist(playlist));
      UTIL.addPlaylistTrack(action.playlistId, action.trackId, success, error);
      return next(action);
    case PlaylistConstants.DELETE_PLAYLIST_TRACK:
      success = playlist => dispatch(ACTIONS.receiveCurrPlaylist(playlist));
      UTIL.deletePlaylistTrack(action.playlistId, action.trackId, success, error);
      return next(action);
    case PlaylistConstants.REMOVE_PLAYLIST:
      success = playlist => dispatch(ACTIONS.removeCurrPlaylist(playlist.id));
      UTIL.removePlaylist(action.playlistId, success, error);
      return next(action);
    case PlaylistConstants.FETCH_FOLLOWED_PLAYLISTS:
      success = playlists => {
        dispatch(ACTIONS.receiveFollowedPlaylists(playlists));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      UTIL.fetchFollowedPlaylists(action.userId, success, error);
      dispatch(LOADING_ACTIONS.startLoading());
      return next(action);
    case PlaylistConstants.FOLLOW_PLAYLIST:
      success = playlist => dispatch(ACTIONS.receiveFollowedPlaylist(playlist));
      UTIL.followPlaylist(action.playlistId, success, error);
      return next(action);
    case PlaylistConstants.UNFOLLOW_PLAYLIST:
      success = playlist => dispatch(ACTIONS.removeFollowedPlaylist(playlist));
      UTIL.unfollowPlaylist(action.playlistId, success, error);
      return next(action);
    default:
      return next(action);
  }
};


export default PlaylistMiddleware;
