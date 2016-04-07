import { GET_USER_INFO } from '../constant/ActionTypes';

export function getUserInfo(username, password) {
  return {
    type: GET_USER_INFO,
    username,
    password
  };
}
