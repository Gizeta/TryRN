import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from '../component/AppPage';
import TextInputWithIcon from '../component/TextInputWithIcon';
import ViewSize from '../util/ScreenSize';

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

export default class LoginView extends Component {
  render() {
    return (
      <AppPage hasBackButton={false} hasSettingButton={false} hasCharacter={true}>
        <View style={containerStyles.main}>
          <View style={containerStyles.form}>
            <View>
              <TextInputWithIcon
                icon={require('../asset/image/login/user.png')}
                iconHeight={37} />
            </View>
            <View>
              <TextInputWithIcon
                secureTextEntry={true}
                icon={require('../asset/image/login/lock.png')}
                iconHeight={37} />
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
                onPress={(this.onLoginButtonClick.bind(this))}>
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
    this.props.navigator.push({ name: 'index' });
  }
}
