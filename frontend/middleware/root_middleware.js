import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import TrackMiddleWare from './track_middleware.js';
import PlaylistMiddleware from './playlist_middleware.js';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger();

const RootMiddleware = applyMiddleware(
    SessionMiddleware,
    TrackMiddleWare,
    PlaylistMiddleware
  );

  export default RootMiddleware;
