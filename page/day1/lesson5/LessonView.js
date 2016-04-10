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
    top: -ViewSize.height * 0.18,
    left: ViewSize.width * 0.49
  },
  text2: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text2Container: {
    top: ViewSize.height * 0.43,
    left: ViewSize.width * 0.8
  },
  text3: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text3Container: {
    top: ViewSize.height * 0.13,
    left: ViewSize.width * 0.76
  },
  text4: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text4Container: {
    top: ViewSize.height * 0.36,
    left: ViewSize.width * 0.48
  },
  text5: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  text5Container: {
    top: -ViewSize.height * 0.31,
    left: ViewSize.width * 0.14
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
  }

  render() {
    return (
      <AppPage backgroundImage={require('../../../asset/day1/lesson5/bg.jpg')}>
        <TouchableOpacity
          activeOpacity={0.7}
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
          <Text style={styles.text1}>lion</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord2Page}
          style={styles.text2Container}>
          <Text style={styles.text2}>land</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord3Page}
          style={styles.text3Container}>
          <Text style={styles.text3}>hill</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord4Page}
          style={styles.text4Container}>
          <Text style={styles.text4}>flower</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToWord5Page}
          style={styles.text5Container}>
          <Text style={styles.text5}>bird</Text>
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
}
