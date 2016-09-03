import { PlaylistConstants } from '../actions/playlist_actions.js';
import * as ACTIONS from '../actions/playlist_actions.js';
import * as UTIL from '../util/playlist_api_util.js';
import * as FORM_ACTIONS from '../actions/form_actions.js';

const PlaylistDetailMiddleware = ({getState, dispatch}) => next => action => {
  let success;
  let error = errors => dispatch(FORM_ACTIONS.receivePlaylistErrors(errors));
  switch (action.type) {
    case PlaylistConstants.FETCH_PLAYLIST_DETAIL:
      success = playlist => dispatch(ACTIONS.receivePlaylistDetail(playlist));
      UTIL.fetchPlaylistDetail(action.id, success, error);
      return next(action);
    case PlaylistConstants.UPDATE_PLAYLIST:
      success = playlist => {
        dispatch(ACTIONS.receiveCurrPlaylist(playlist));
        dispatch(ACTIONS.receivePlaylistDetail(playlist));
      };
      UTIL.updatePlaylist(action.playlist, success, error);
      return next(action);
    default:
      next(action);
  }
};

export default PlaylistDetailMiddleware;
