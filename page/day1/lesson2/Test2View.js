import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TextInput,
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
    fontSize: 20,
    color: 'black'
  },
  text1: {
    top: 20,
    height: ViewSize.height * 0.3,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});

export default class Test2View extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson2/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>你会用英文买动物园的门票吗？请你选择一句英文来向我询问票价。</Text>
          <View style={styles.text1}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.text}>This is a ticket.</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToBingoPage.bind(this))}>
              <Text style={styles.text}>How much it is?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.nextButtonContainer}
              onPress={(this.onNavigateToFailedPage.bind(this))}>
              <Text style={styles.text}>There is a gate.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TestPage>
    );
  }

  onNavigateToBingoPage() {
    this.props.navigator.push({ name: 'test2_bingo' });
  }

  onNavigateToFailedPage() {
    this.props.navigator.push({ name: 'test_failed', next: 'test2_failed' });
  }
}
