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
import NavigatorHelper from '../../../util/NavigatorHelper';

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
    top: ViewSize.height * 0.15,
    left: ViewSize.width * 0.08,
    width: ViewSize.width * 0.6
  },
  text: {
    color: 'black',
    fontSize: 20
  },
  nextButtonContainer: {
    position: 'absolute',
    top: ViewSize.height * 0.78,
    left: ViewSize.width * 0.4
  },
  nextButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290
  },
  icon: {
    width: ViewSize.width * 0.08,
    height: ViewSize.width * 0.08 * 954 / 916,
    left: ViewSize.width * 0.4,
    top: -ViewSize.height * 0.17
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
        backgroundImage={require('../../../asset/day1/lesson5/go.jpg')}>
        <View style={styles.cover} />
        <Image
          source={require('../../../asset/image/bubble.png')}
          resizeMode="stretch"
          style={styles.bubble}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>今天的任务已完成。</Text>
            <Text style={styles.text}>是否进行第二天的旅行？</Text>
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
    NavigatorHelper.get().push({ name: 'test1' });
  }
}
