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
    height: ViewSize.height * 0.6,
    top: ViewSize.height * 0.1
  },
  text: {
    fontSize: 22,
    color: 'black'
  },
  icon: {
    width: ViewSize.width * 0.06,
    height: ViewSize.width * 0.06,
    left: ViewSize.width * 0.16,
    top: -ViewSize.height * 0.19
  },
  nextButtonContainer: {
    opacity: 1
  },
  nextButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290,
    opacity: 1
  }
});

export default class Test2BingoView extends Component {
  constructor(props) {
    super(props);

    this.onNextButtonClick = this.onNextButtonClick.bind(this);
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson5/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>Bingo! You get 1 coin          !</Text>
          <Text style={styles.text}>Well done!再答对一道题就能得到肉啦</Text>
          <Image
            style={styles.icon}
            source={require('../../../asset/image/coin.png')} />
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
    this.props.navigator.push({ name: 'test3' });
  }
}
