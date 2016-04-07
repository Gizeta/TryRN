import { combineReducers } from 'redux-immutablejs';
import user from './user';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
