import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';
import TrackMiddleWare from './track_middleware.js';

const RootMiddleware = applyMiddleware(
    SessionMiddleware,
    TrackMiddleWare
  );

  export default RootMiddleware;
