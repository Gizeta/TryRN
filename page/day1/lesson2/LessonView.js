import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from '../../../component/AppPage';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  button: {
    width: ViewSize.height * 0.1 * 200 / 67,
    height: ViewSize.height * 0.1
  },
  buttonContainer: {
    top: ViewSize.height * 0.895,
    left: ViewSize.width - ViewSize.height * 0.1 * 202 / 67
  },
  title: {
    color: 'orangered',
    fontSize: 40,
    fontWeight: 'bold',
    top: -ViewSize.height * 0.1,
    left: 10
  },
  text1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text1Container: {
    top: -ViewSize.height * 0.07,
    left: ViewSize.width * 0.18
  },
  text2: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2Container: {
    top: -ViewSize.height * 0.06,
    left: ViewSize.width * 0.58
  },
  text3: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text3Container: {
    top: -ViewSize.height * 0.4,
    left: ViewSize.width * 0.54
  },
  text4: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text4Container: {
    top: ViewSize.height * 0.03,
    left: ViewSize.width * 0.74
  },
  text5: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text5Container: {
    top: ViewSize.height * 0,
    left: ViewSize.width * 0.16
  }
});

export default class LessonView extends Component {
  constructor(props) {
    super(props);
    this.onNavigateToWord1Page = this.onNavigateToWord1Page.bind(this);
    this.onNavigateToWord2Page = this.onNavigateToWord2Page.bind(this);
    this.onNavigateToWord3Page = this.onNavigateToWord3Page.bind(this);
    this.onNavigateToWord4Page = this.onNavigateToWord4Page.bind(this);
    this.onNavigateToWord5Page = this.onNavigateToWord5Page.bind(this);
    this.onNavigateToTestPage = this.onNavigateToTestPage.bind(this);
  }

  render() {
    return (
      <AppPage backgroundImage={require('../../../asset/day1/lesson2/bg.jpg')}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={this.onNavigateToTestPage}
          style={styles.buttonContainer}>
          <Image
            source={require('../../../asset/image/go2.png')}
            style={styles.button} />
        </TouchableOpacity>
        <Text style={styles.title}>Day 1</Text>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord1Page}
          style={styles.text1Container}>
          <Text style={styles.text1}>rain</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord2Page}
          style={styles.text2Container}>
          <Text style={styles.text2}>zoo</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord3Page}
          style={styles.text3Container}>
          <Text style={styles.text3}>welcome</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord4Page}
          style={styles.text4Container}>
          <Text style={styles.text4}>gate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord5Page}
          style={styles.text5Container}>
          <Text style={styles.text5}>ticket office</Text>
        </TouchableOpacity>
      </AppPage>
    );
  }

  onNavigateToWord1Page() {
    this.props.navigator.push({ name: 'word1' });
  }

  onNavigateToWord2Page() {
    this.props.navigator.push({ name: 'word2' });
  }

  onNavigateToWord3Page() {
    this.props.navigator.push({ name: 'word3' });
  }

  onNavigateToWord4Page() {
    this.props.navigator.push({ name: 'word4' });
  }

  onNavigateToWord5Page() {
    this.props.navigator.push({ name: 'word5' });
  }

  onNavigateToTestPage() {
    this.props.navigator.push({ name: 'test_entrance' });
  }
}
