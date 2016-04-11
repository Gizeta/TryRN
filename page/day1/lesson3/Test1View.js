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
    top: ViewSize.height * 0.05,
    fontSize: 20,
    color: 'black'
  },
  nextButtonContainer: {
    opacity: 1
  },
  image1: {
    width: ViewSize.height * 0.3 * 800 / 548,
    height: ViewSize.height * 0.3,
    alignSelf: 'center'
  },
  text1: {
    top: 50,
    alignSelf: 'center',
    width: ViewSize.width * 0.5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  choice: {
    fontSize: 20,
    color: 'black'
  }
});

export default class Test1View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson3/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>首先你要告诉我一下哪个是长颈鹿的正确英文拼写？</Text>
          <View style={styles.text1}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.choice}>panda</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.choice}>lion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToBingoPage.bind(this))}>
              <Text style={styles.choice}>giraffe</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TestPage>
    );
  }

  onNavigateToBingoPage() {
    this.props.navigator.push({ name: 'test1_bingo' });
  }

  onNavigateToFailedPage() {
    this.props.navigator.push({ name: 'test_failed', next: 'test1_failed' });
  }
}
