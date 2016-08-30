import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware.js';

const RootMiddleware = applyMiddleware(
    SessionMiddleware
  );

  export default RootMiddleware;
