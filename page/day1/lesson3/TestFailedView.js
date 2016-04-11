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
    top: ViewSize.height * 0.15
  },
  text: {
    fontSize: 24,
    color: 'black'
  },
  icon: {
    width: ViewSize.width * 0.06,
    height: ViewSize.width * 0.06,
    left: ViewSize.width * 0.17,
    top: -ViewSize.height * 0.19
  },
  nextButtonContainer: {
    opacity: 1,
    top: 30
  },
  nextButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290,
    opacity: 1
  }
});

export default class TestFailedView extends Component {
  constructor(props) {
    super(props);

    this.onNextButtonClick = this.onNextButtonClick.bind(this);
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson3/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>sorry～你没能得到胡萝卜～快回去好好</Text>
          <Text style={styles.text}>看看长颈鹿，它在等你喂它胡萝卜呢～</Text>
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
    let routes = this.props.navigator.getCurrentRoutes();
    let next = routes[routes.length - 1].next;
    this.props.navigator.push({ name: next });
  }
}
