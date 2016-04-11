import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import TestPage from '../../../component/TestPage';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: ViewSize.width * 0.7,
    height: ViewSize.height * 0.6
  },
  text: {
    fontSize: 24,
    color: 'black'
  },
  icon: {
    width: ViewSize.width * 0.06,
    height: ViewSize.width * 0.06,
    left: -ViewSize.width * 0.01,
    top: -ViewSize.height * 0.27
  },
  nextButtonContainer: {
    marginTop: 5,
    opacity: 1
  },
  nextButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290,
    opacity: 1
  },
  icon2: {
    width: ViewSize.width * 0.06,
    height: ViewSize.width * 0.06 * 170 / 114,
    marginTop: -ViewSize.width * 0.08,
  }
});

export default class Test3BingoView extends Component {
  constructor(props) {
    super(props);

    this.onNextButtonClick = this.onNextButtonClick.bind(this);
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson5/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>Bingo!得到1个      ，你已经具备喂</Text>
          <Text style={styles.text}>老虎吃肉的能力了，我带你去喂老虎吃{"\n"}肉吧！</Text>
          <Image
            style={styles.icon}
            source={require('../../../asset/image/coin.png')} />
          <Image
            style={styles.icon2}
            resizeMode="stretch"
            source={require('../../../asset/image/item/meat.png')} />
          <Text style={styles.text}>meat</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.nextButtonContainer}
            onPress={(this.onNextButtonClick.bind(this))}>
            <Image
              source={require('../../../asset/image/welcome/next.png')}
              style={styles.nextButton} />
          </TouchableOpacity>
        </View>
      </TestPage>
    );
  }

  onNextButtonClick() {
    this.props.navigator.push({ name: 'go' });
  }
}
