import { combineReducers } from 'redux-immutablejs';
import user from './user';
import course from './course';
import pack from './package';

const rootReducer = combineReducers({
  user,
  course,
  pack
});

export default rootReducer;
