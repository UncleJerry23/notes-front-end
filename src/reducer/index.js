import { combineReducers } from 'redux';
import notes from './noteReducer';
import session from './sessionReducer';

export default combineReducers({
  notes,
  session
});
