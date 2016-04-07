import { GET_USER_INFO } from '../constant/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  name: ''
});

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFO:
      // login
      return state.merge({
        name: action.username
      });
    default:
      return state;
  }
}
