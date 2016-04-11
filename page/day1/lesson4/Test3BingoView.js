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
    left: -ViewSize.width * 0.03,
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
    width: ViewSize.width * 0.08,
    height: ViewSize.width * 0.08 * 221 / 186,
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
        backgroundImage={require('../../../asset/day1/lesson4/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>Bingo!得到1个      ，恭喜你获得这个</Text>
          <Text style={styles.text}>机会，下面由我带你去喂大熊猫吃竹子吧！</Text>
          <Image
            style={styles.icon}
            source={require('../../../asset/image/coin.png')} />
          <Image
            style={styles.icon2}
            resizeMode="stretch"
            source={require('../../../asset/image/item/bamboo.png')} />
          <Text style={styles.text}>bamboo</Text>
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
