import SessionReducer from './session_reducer.js';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session: SessionReducer
});

export default RootReducer;
