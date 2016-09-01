import SessionReducer from './session_reducer.js';
import FormReducer from './form_reducer.js';
import TrackReducer from './track_reducer.js';
import PlaylistReducer from './playlist_reducer.js';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  forms: FormReducer,
  tracks: TrackReducer,
  playlists: PlaylistReducer
});

export default RootReducer;
