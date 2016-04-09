import React, {
  Component,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import ViewSize from '../util/ScreenSize';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: ViewSize.width,
    height: ViewSize.height
  },
  content: {
    flex: 1
  },
  buttonContainer: {
    position: 'absolute',
    top: 4,
    right: -3
  },
  button: {
    width: 50,
    height: 50
  },
  character: {
    position: 'absolute',
    left: ViewSize.width * 0.1,
    bottom: 10,
    width: ViewSize.width * 0.25,
    height: ViewSize.width * 0.25 * 311 / 290
  }
});

export default class AppPage extends Component {
  static propTypes = {
    hasBackButton: React.PropTypes.bool,
    hasSettingButton: React.PropTypes.bool,
    hasCharacter: React.PropTypes.bool,
    hasBackground: React.PropTypes.bool,
    backgroundImage: React.PropTypes.number
  };

  static defaultProps = {
    hasBackButton: true,
    hasSettingButton: true,
    hasCharacter: false,
    hasBackground: true,
    backgroundImage: require('../asset/image/home/background.png')
  };

  constructor(props) {
    super(props);
  }

  render() {
    let backButton, settingButton, characterImage, backgroundImage;
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
    if (this.props.hasCharacter) {
      characterImage = (
        <Image
          source={require('../asset/image/character.png')}
          style={styles.character} />
      );
    }
    backgroundImage = this.props.hasBackground
      ? this.props.backgroundImage
      : require('../asset/image/transparent.png');
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image source={backgroundImage} style={styles.background} resizeMode="stretch">
          <View style={styles.content}>
            {this.props.children}
          </View>
          {characterImage}
          <View style={styles.buttonContainer}>
            {settingButton}
            {backButton}
          </View>
        </Image>
      </View>
    );
  }
}
