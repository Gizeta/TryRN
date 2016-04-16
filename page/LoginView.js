import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import loaderHandler from 'react-native-busy-indicator/LoaderHandler';
import { connect } from 'react-redux';

import AppPage from '../component/AppPage';
import TextInputWithIcon from '../component/TextInputWithIcon';
import ViewSize from '../util/ScreenSize';
import AlertHelper from '../util/AlertHelper';

import * as userAction from '../app/action/user';

let styles = StyleSheet.create({
  text: {
    fontSize: 16
  },
  loginButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290
  }
});

const containerStyles = {
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: ViewSize.width * 0.4,
    height: ViewSize.height * 0.57,
    justifyContent: 'space-between'
  },
  append: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    alignItems: 'center'
  }
}

class LoginView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.onLoginButtonClick = this.onLoginButtonClick.bind(this);
  }

  render() {
    if (this.props.state.get("name") != "") {
      setTimeout(() => {
        this.props.navigator.push({ name: 'map' });
      }, 0);
    }

    return (
      <AppPage hasBackButton={false} hasSettingButton={false} hasCharacter={true}>
        <View style={containerStyles.main}>
          <View style={containerStyles.form}>
            <View>
              <TextInputWithIcon
                icon={require('../asset/image/login/user.png')}
                iconHeight={37}
                onChangeText={(text) => this.setState({username: text})}
                value={this.state.username} />
            </View>
            <View>
              <TextInputWithIcon
                secureTextEntry={true}
                icon={require('../asset/image/login/lock.png')}
                iconHeight={37}
                onChangeText={(text) => this.setState({password: text})}
                value={this.state.username} />
            </View>
            <View style={containerStyles.append}>
              {/*<TouchableOpacity
                activeOpacity={0.3}>
                <Text style={styles.text}>忘记登录密码？</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.3}>
                <Text style={styles.text}>注册</Text>
              </TouchableOpacity>*/}
            </View>
            <View style={containerStyles.button}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={this.onLoginButtonClick}>
                <Image
                  source={require('../asset/image/login/login.png')}
                  style={styles.loginButton} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </AppPage>
    );
  }

  onLoginButtonClick() {
    let { dispatch } = this.props;

    if (this.state.username == "" || this.state.password == "") {
      AlertHelper.alert("用户名或密码不能为空");
      return;
    }
    if (/[!\?&\/\\'"]/.test(this.state.username)) {
      AlertHelper.alert("用户名不能含有特殊符号");
      return;
    }
    if (this.state.username == "test" && this.state.password == "test") {
      AlertHelper.alert("作为测试用户登录");
      dispatch(userAction.getUserInfo(this.state.username));
      return;
    }

    loaderHandler.showLoader("Connecting");
    dispatch(userAction.getUserInfoAsync(this.state.username, this.state.password));
  }
}

export default connect(state => ({
  state: state.get("user")
}))(LoginView);
