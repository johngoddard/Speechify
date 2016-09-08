import SessionReducer from './session_reducer.js';
import FormReducer from './form_reducer.js';
import TrackReducer from './track_reducer.js';
import PlaylistReducer from './playlist_reducer.js';
import PlaylistDetailReducer from './playlist_detail_reducer.js';
import UserDetailReducer from './user_detail_reducer.js';
import UsersReducer from './users_reducer.js';
import AudioReducer from './audio_reducer.js';
import SearchReducer from './search_reducer.js';
import LoadingReducer from './loading_reducer.js';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer,
  forms: FormReducer,
  tracks: TrackReducer,
  playlists: PlaylistReducer,
  playlistDetail: PlaylistDetailReducer,
  users: UsersReducer,
  userDetail: UserDetailReducer,
  currentTrack: AudioReducer,
  search: SearchReducer,
  loading: LoadingReducer
});

export default RootReducer;
