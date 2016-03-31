import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from '../component/AppPage';
import ViewSize from '../util/ScreenSize';

let styles = StyleSheet.create({
  bubble: {
    position: 'absolute',
    left: ViewSize.width * 0.2,
    top: 10,
    width: ViewSize.width * 0.65,
    height: ViewSize.height * 0.57,
    opacity: 0.7
  },
  textContainer: {
    top: ViewSize.height * 0.11,
    left: ViewSize.width * 0.15,
    width: ViewSize.width * 0.35
  },
  text: {
    color: 'black',
    fontSize: 25
  },
  nextButtonContainer: {
    top: ViewSize.height * 0.78,
    left: ViewSize.width * 0.4
  },
  nextButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290
  }
});

export default class WelcomeView extends Component {
  render() {
    return (
      <AppPage hasBackButton={false} hasSettingButton={false} hasCharacter={true}>
        <Image
          source={require('../asset/image/bubble.png')}
          resizeMode="stretch"
          style={styles.bubble}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Hi~ I'm Peale.</Text>
            <Text style={styles.text}>Do you want to play with me?</Text>
          </View>
        </Image>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.nextButtonContainer}
          onPress={(this.onNextButtonClick.bind(this))}>
          <Image
            source={require('../asset/image/welcome/next.png')}
            style={styles.nextButton} />
        </TouchableOpacity>
      </AppPage>
    );
  }

  onNextButtonClick() {
    this.props.navigator.push({ name: 'login' });
  }
}
