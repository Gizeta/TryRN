import {
  GET_COURSE_PROGRESS,
  UPDATE_COURSE_PROGRESS
} from '../constant/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  progress: 1,
  day1: {
    progress: 1,
    test: 1
  },
  reviewList: []
});

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE_PROGRESS:
      return state.merge({
        name: action.username
      });
    case UPDATE_COURSE_PROGRESS:
      return state;
    default:
      return state;
  }
}
