import { PlaylistConstants } from '../actions/playlist_actions.js';
import * as ACTIONS from '../actions/playlist_actions.js';
import * as UTIL from '../util/playlist_api_util.js';
import * as FORM_ACTIONS from '../actions/form_actions.js';
import * as LOADING_ACTIONS from '../actions/loading_actions.js';

const PlaylistDetailMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = errors => {
    dispatch(FORM_ACTIONS.receivePlaylistErrors(errors));
    dispatch(LOADING_ACTIONS.stopLoading());
  };
  switch (action.type) {
    case PlaylistConstants.FETCH_PLAYLIST_DETAIL:
      success = playlist => {
        dispatch(ACTIONS.receivePlaylistDetail(playlist));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      UTIL.fetchPlaylistDetail(action.id, success, error);
      dispatch(LOADING_ACTIONS.startLoading());
      return next(action);
    case PlaylistConstants.UPDATE_PLAYLIST:
      success = playlist => {
        dispatch(ACTIONS.receiveCurrPlaylist(playlist));
        dispatch(ACTIONS.receivePlaylistDetail(playlist));
        dispatch(LOADING_ACTIONS.stopLoading());
      };
      dispatch(LOADING_ACTIONS.startLoading());
      UTIL.updatePlaylist(action.playlist, success, error);
      return next(action);
    default:
      next(action);
  }
};

export default PlaylistDetailMiddleware;
