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
    opacity: 1
  },
  nextButton: {
    width: ViewSize.width * 0.3,
    height: ViewSize.width * 0.3 * 51 / 290,
    opacity: 1
  },
  icon2: {
    width: ViewSize.width * 0.08,
    height: ViewSize.width * 0.08 * 954 / 916,
    left: ViewSize.width * 0.09,
    top: -ViewSize.height * 0.31
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
        backgroundImage={require('../../../asset/day1/lesson1/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>Bingo! You get 1 coin          !</Text>
          <Text style={styles.text}>Well done!You get a        umbrella!</Text>
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
          <Image
            style={styles.icon2}
            source={require('../../../asset/image/item/umbrella.png')} />
        </View>
      </TestPage>
    );
  }

  onNextButtonClick() {
    this.props.navigator.push({ name: 'go' });
  }
}
