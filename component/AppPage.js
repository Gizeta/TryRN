import React, {
  Component,
  Dimensions,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import ViewSize from '../util/ScreenSize';
import NavigatorHelper from '../util/NavigatorHelper';

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
  },
  popUp: {
    marginTop: -ViewSize.height * 0.75,
    marginLeft: ViewSize.width * 0.15
  },
  popUpImg: {
    width: ViewSize.width * 0.7,
    height: ViewSize.height * 0.5,
    opacity: 0.8
  },
  hbox: {
    marginTop: -ViewSize.height * 0.5,
    width: ViewSize.width * 0.7,
    height: ViewSize.height * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  storeImg: {
    width: ViewSize.width * 0.15,
    height: ViewSize.width * 0.15 * 170 / 157
  },
  text: {
    color: 'black',
    fontSize: 20
  },
  charaImg: {
    width: ViewSize.width * 0.15,
    height: ViewSize.width * 0.15 * 159 / 148
  },
  meImg: {
    width: ViewSize.width * 0.15,
    height: ViewSize.width * 0.15 * 140 / 141
  },
  packImg: {
    width: ViewSize.width * 0.07,
    height: ViewSize.width * 0.07 * 124 / 151,
    position: 'absolute',
    marginTop: -ViewSize.width * 0.1,
    marginLeft: ViewSize.width * 0.09
  }
});

export default class AppPage extends Component {
  static propTypes = {
    hasBackButton: React.PropTypes.bool,
    hasSettingButton: React.PropTypes.bool,
    hasCharacter: React.PropTypes.bool,
    hasBackground: React.PropTypes.bool,
    backgroundImage: React.PropTypes.number,
    characterImage: React.PropTypes.number
  };

  static defaultProps = {
    hasBackButton: true,
    hasSettingButton: true,
    hasCharacter: false,
    hasBackground: true,
    backgroundImage: require('../asset/image/home/background.png'),
    characterImage: require('../asset/image/character.png')
  };

  constructor(props) {
    super(props);

    this.state = {
      isPopup: false
    }
  }

  render() {
    let backButton, settingButton, characterImage, backgroundImage, popUp;
    if (this.props.hasSettingButton) {
      settingButton = (
        <TouchableOpacity
          onPress={this.onSettingButtonPress.bind(this)}
          activeOpacity={0.6}>
          <Image
            source={require('../asset/image/component/setting.png')}
            style={styles.button} />
        </TouchableOpacity>
      );
    }
    if (this.props.hasBackButton) {
      backButton = (
        <TouchableOpacity
          onPress={this.onNavigateBack.bind(this)}
          activeOpacity={0.6}>
          <Image
            source={require('../asset/image/component/back.png')}
            style={styles.button} />
        </TouchableOpacity>
      );
    }
    if (this.props.hasCharacter) {
      characterImage = (
        <Image
          source={this.props.characterImage}
          resizeMode="contain"
          style={styles.character} />
      );
    }
    backgroundImage = this.props.hasBackground
      ? this.props.backgroundImage
      : require('../asset/image/transparent.png');
    if (this.state.isPopup) {
      popUp = (
        <View style={styles.popUp}>
          <Image
            source={require('../asset/image/overlay.png')}
            style={styles.popUpImg} />
          <View style={styles.hbox}>
            <TouchableOpacity
              onPress={this.onNavigateToStore.bind(this)}
              activeOpacity={0.6}
              style={styles.item}>
              <Image
                source={require('../asset/image/store.png')}
                style={styles.storeImg} />
              <Text style={styles.text}>Store</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onNavigateToPackage.bind(this)}
              activeOpacity={0.6}
              style={styles.item}>
              <Image
                source={require('../asset/image/character.png')}
                style={styles.charaImg} />
              <Text style={styles.text}>Peale's Bag</Text>
              <Image
                source={require('../asset/image/package.png')}
                style={styles.packImg} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onNavigateToMe.bind(this)}
              activeOpacity={0.6}
              style={styles.item}>
              <Image
                source={require('../asset/image/me.png')}
                style={styles.meImg} />
              <Text style={styles.text}>Me</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image source={backgroundImage} style={[styles.background, this.props.backgroundStyle]} resizeMode="stretch">
          <View style={styles.content}>
            {this.props.children}
          </View>
          {characterImage}
          <View style={styles.buttonContainer}>
            {settingButton}
            {backButton}
          </View>
        </Image>
        {popUp}
      </View>
    );
  }

  onSettingButtonPress() {
    this.setState({ isPopup: !this.state.isPopup });
  }

  onNavigateToStore() {
    NavigatorHelper.get().push({ name: 'shop' });
  }

  onNavigateToPackage() {
    NavigatorHelper.get().push({ name: 'package' });
  }

  onNavigateToMe() {
    NavigatorHelper.get().push({ name: 'me' });
  }

  onNavigateBack() {
    NavigatorHelper.getCurrent().pop();
  }
}
