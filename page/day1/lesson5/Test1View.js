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
    width: ViewSize.width * 0.6,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  input: {
    width: ViewSize.width * 0.2
  }
});

export default class Test1View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: ''
    };
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson5/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>请告诉我鸟和狮子的英文正确拼写。</Text>
          <View style={styles.text1}>
            <TextInput
              onChangeText={(text1) => this.setState({text1})}
              onSubmitEditing={this.onSubmitEditing.bind(this)}
              style={styles.input} />
            <TextInput
              onChangeText={(text2) => this.setState({text2})}
              onSubmitEditing={this.onSubmitEditing.bind(this)}
              style={styles.input} />
          </View>
        </View>
      </TestPage>
    );
  }

  onSubmitEditing() {
    if (this.state.text1 == '' || this.state.text2 == '') return;
    if (this.state.text1 == 'bird' && this.state.text2 == 'lion') {
      this.props.navigator.push({ name: 'test1_bingo' });
    }
    else {
      this.props.navigator.push({ name: 'test_failed', next: 'test1_failed' });
    }
  }
}
