import {
  GET_PACKAGE,
  UPDATE_PACKAGE
} from '../constant/ActionTypes';

export function getPackage(username) {
  return {
    type: GET_COURSE_PROGRESS,
    username
  };
}

export function updatePackage(username, key, item, value) {
  return {
    type: UPDATE_COURSE_PROGRESS,
    username
  };
}
