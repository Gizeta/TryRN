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
        backgroundImage={require('../../../asset/day1/lesson2/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>以下三个单词，哪一个是动物园的正确拼写？</Text>
          <View style={styles.text1}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToBingoPage.bind(this))}>
              <Text style={styles.choice}>zoo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.choice}>gate</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.choice}>welcome</Text>
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
