import React, {
  Component,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null
  },
  content: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    top: 2,
    right: -6
  },
  button: {
    width: 50,
    height: 50
  }
});

export default class AppPage extends Component {
  static propTypes = {
    hasBackButton: React.PropTypes.bool,
    hasSettingButton: React.PropTypes.bool,
    backgroundImage: React.PropTypes.number
  };

  static defaultProps = {
    hasBackButton: true,
    hasSettingButton: true,
    backgroundImage: require('../asset/image/home/background.png')
  };

  constructor(props) {
    super(props);
  }

  render() {
    let backButton, settingButton;
    if (this.props.hasSettingButton) {
      settingButton = (
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={require('../asset/image/component/setting.png')}
            style={styles.button} />
        </TouchableOpacity>
      );
    }
    if (this.props.hasBackButton) {
      backButton = (
        <TouchableOpacity activeOpacity={0.6}>
          <Image
            source={require('../asset/image/component/back.png')}
            style={styles.button} />
        </TouchableOpacity>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image source={this.props.backgroundImage} style={styles.background}>
          <View style={styles.content}>
            {this.props.children}
          </View>
          <View style={styles.buttonContainer}>
            {settingButton}
            {backButton}
          </View>
        </Image>
      </View>
    );
  }
}
