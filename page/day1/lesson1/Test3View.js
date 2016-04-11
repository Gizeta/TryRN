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
    width: ViewSize.width * 0.7,
    height: ViewSize.height * 0.6
  },
  text: {
    fontSize: 24,
    color: 'black'
  },
  nextButtonContainer: {
    opacity: 1
  },
  image1: {
    width: ViewSize.height * 0.25 * 247 / 172,
    height: ViewSize.height * 0.25,
    alignSelf: 'center'
  },
  text1: {
    flexDirection: 'row',
    top: 30,
    justifyContent: 'space-around'
  }
});

export default class Test3View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson1/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>Which is sunny?</Text>
          <View style={styles.text1}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Image
                style={styles.image1}
                source={require('../../../asset/day1/lesson1/test/cloudy.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Image
                style={styles.image1}
                source={require('../../../asset/day1/lesson1/test/snowy.png')} />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToBingoPage.bind(this))}>
              <Image
                style={styles.image1}
                source={require('../../../asset/day1/lesson1/test/sunny.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </TestPage>
    );
  }

  onNavigateToBingoPage() {
    this.props.navigator.push({ name: 'test3_bingo' });
  }

  onNavigateToFailedPage() {
    this.props.navigator.push({ name: 'test_failed', next: 'test3_failed' });
  }
}
