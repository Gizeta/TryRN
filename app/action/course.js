import {
  GET_COURSE_PROGRESS,
  UPDATE_COURSE_PROGRESS
} from '../constant/ActionTypes';

export function getCourseProgress(username) {
  return {
    type: GET_COURSE_PROGRESS,
    username
  };
}

export function updateCourseProgress(username, key, action, value) {
  return {
    type: UPDATE_COURSE_PROGRESS,
    username
  };
}
