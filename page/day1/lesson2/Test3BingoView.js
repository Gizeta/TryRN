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
    top: -ViewSize.height * 0.19
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
    width: ViewSize.width * 0.2,
    height: ViewSize.width * 0.2 * 216 / 488,
    marginTop: -ViewSize.width * 0.04,
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
        backgroundImage={require('../../../asset/day1/lesson2/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>Bingo!得到1个      ，门票送给你～</Text>
          <Text style={styles.text}>祝你在动物园玩的开心！</Text>
          <Image
            style={styles.icon}
            source={require('../../../asset/image/coin.png')} />
          <Image
            style={styles.icon2}
            source={require('../../../asset/image/item/ticket.png')} />
          <Text style={styles.text}>ticket</Text>
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
