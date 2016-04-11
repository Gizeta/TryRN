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
    marginTop: 10,
    fontSize: 22,
    color: 'black'
  },
  nextButtonContainer: {
    opacity: 1
  },
  text1: {
    flexDirection: 'row',
    top: 50,
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
        backgroundImage={require('../../../asset/day1/lesson2/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>It cost one dollar. 请你选择正确的纸币：</Text>
          <View style={styles.text1}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.text}>100美元</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.text}>1美分</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToBingoPage.bind(this))}>
              <Text style={styles.text}>1美元</Text>
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
