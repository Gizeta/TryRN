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
    top: ViewSize.height * 0.11,
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
        backgroundImage={require('../../../asset/day1/lesson3/next.jpg')}
        characterImage={require('../../../asset/image/chara2.png')}>
        <View style={styles.cover} />
        <Image
          source={require('../../../asset/image/bubble.png')}
          resizeMode="stretch"
          style={styles.bubble}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>嗨我的朋友，听说你要喂长颈鹿吃胡萝{"\n"}卜，我手上正好有胡萝卜，可以送给你{"\n"}，完成你的心愿。但前提是你要答对我{"\n"}出的题目。</Text>
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
