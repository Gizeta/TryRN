import {
  GET_PACKAGE,
  UPDATE_PACKAGE
} from '../constant/ActionTypes';
import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  coin: 0,
  item: []
});

export default function packageReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PACKAGE:
      return state.merge({
        name: action.username
      });
    case UPDATE_PACKAGE:
      return state;
    default:
      return state;
  }
}
