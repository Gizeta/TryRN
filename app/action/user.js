import { GET_USER_INFO } from '../constant/ActionTypes';

import AlertHelper from '../../util/AlertHelper';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';

export function getUserInfo(username) {
  return {
    type: GET_USER_INFO,
    username
  };
}

export function getUserInfoAsync(username, password) {
  return dispatch => {
    fetch(`http://try-rn.gizeta.me/login?username=${username}&password=${password}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then((response) => response.text())
    .then((responseText) => {
      let data = JSON.parse(responseText);
      if (data.err) {
        switch (data.message) {
          case "NOT_EXIST":
            AlertHelper.confirm("用户名不存在，是否注册新用户", () => {
              fetch(`http://try-rn.gizeta.me/reg?username=${username}&password=${password}`, {
                method: 'GET',
                headers: {
                  'Cache-Control': 'no-cache'
                }
              })
              .then((response) => response.text())
              .then((responseText) => {
                let data = JSON.parse(responseText);
                if (data.err) {
                  switch (data.message) {
                    case "EXIST":
                      AlertHelper.alert("用户名已存在");
                      break;
                    default:
                      AlertHelper.alert(error.message);
                      break;
                  }
                }
                else {
                  AlertHelper.alert("注册成功");
                  dispatch(getUserInfo(username));
                }
              })
              .catch((error) => {
                AlertHelper.alert(error.message);
              })
            });
            break;
          case "AUTH_FAIL":
            AlertHelper.alert("用户名或密码错误");
            break;
          default:
            AlertHelper.alert(data.message);
            break;
        }
      }
      else {
        dispatch(getUserInfo(username));
      }
    })
    .catch((error) => {
      AlertHelper.alert(error.message);
    })
    .finally(() => {
      loaderHandler.hideLoader();
    });
  };
}
