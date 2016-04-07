import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { connect } from 'react-redux';

import AppPage from '../component/AppPage';
import TextInputWithIcon from '../component/TextInputWithIcon';
import ViewSize from '../util/ScreenSize';

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
              <TouchableOpacity
                activeOpacity={0.3}>
                <Text style={styles.text}>忘记登录密码？</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.3}>
                <Text style={styles.text}>注册</Text>
              </TouchableOpacity>
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
    dispatch(userAction.getUserInfo(this.state.username, this.state.password));

    this.props.navigator.push({ name: 'map' });
  }
}

export default connect(state => ({
  state: state.get("user")
}))(LoginView);
