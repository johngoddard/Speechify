import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import TrackMiddleWare from './track_middleware.js';
import PlaylistMiddleware from './playlist_middleware.js';
import PlaylistDetailMiddleware from './playlist_detail_middleware.js';
import UsersMiddleware from './users_middleware.js';
import UserDetailMiddleware from './user_detail_middleware.js';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
    SessionMiddleware,
    TrackMiddleWare,
    PlaylistMiddleware,
    PlaylistDetailMiddleware,
    UsersMiddleware,
    UserDetailMiddleware
  );

  export default RootMiddleware;
