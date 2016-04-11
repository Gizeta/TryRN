import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from '../../../component/AppPage';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  cover: {
    backgroundColor: 'white',
    height: ViewSize.height,
    opacity: 0.8
  },
  title: {
    position: 'absolute',
    color: 'orangered',
    fontSize: 40,
    fontWeight: 'bold',
    top: 0,
    left: 10
  },
  bubble: {
    position: 'absolute',
    left: ViewSize.width * 0.2,
    top: 10,
    width: ViewSize.width * 0.65,
    height: ViewSize.height * 0.57,
    opacity: 0.7
  },
  textContainer: {
    top: ViewSize.height * 0.08,
    left: ViewSize.width * 0.08,
    width: ViewSize.width * 0.6
  },
  text: {
    color: 'black',
    fontSize: 20,
    width: ViewSize.width * 0.6
  },
  nextButtonContainer: {
    position: 'absolute',
    top: ViewSize.height * 0.78,
    left: ViewSize.width * 0.4
  },
  nextButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290
  }
});

export default class TestIntroView extends Component {
  constructor(props) {
    super(props);

    this.onNextButtonClick = this.onNextButtonClick.bind(this);
  }

  render() {
    return (
      <AppPage
        hasCharacter={true}
        backgroundImage={require('../../../asset/day1/lesson4/next.jpg')}
        characterImage={require('../../../asset/image/chara3.png')}>
        <View style={styles.cover} />
        <Image
          source={require('../../../asset/image/bubble.png')}
          resizeMode="stretch"
          style={styles.bubble}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>在观赏大熊猫的区域，有许许多多的小{"\n"}朋友要与大熊猫合影，为了让大熊猫与{"\n"}你更亲密的接触，我特别设置了一次让{"\n"}你零距离喂大熊猫吃竹子的机会，快来{"\n"}闯关获得这个机会吧～</Text>
          </View>
        </Image>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.nextButtonContainer}
          onPress={this.onNextButtonClick}>
          <Image
            source={require('../../../asset/image/welcome/next.png')}
            style={styles.nextButton} />
        </TouchableOpacity>
        <Text style={styles.title}>DAY 1</Text>
      </AppPage>
    );
  }

  onNextButtonClick() {
    this.props.navigator.push({ name: 'test1' });
  }
}
