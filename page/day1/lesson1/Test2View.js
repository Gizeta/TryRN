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
    fontSize: 24,
    color: 'black'
  },
  input: {
    width: ViewSize.width * 0.4,
    top: 50,
    alignSelf: 'center'
  }
});

export default class Test2View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson1/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>请你正确拼写鱼这个单词。</Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            style={styles.input} />
        </View>
      </TestPage>
    );
  }

  onSubmitEditing() {
    if (this.state.text == 'fish') {
      this.props.navigator.push({ name: 'test2_bingo' });
    }
    else {
      this.props.navigator.push({ name: 'test_failed', next: 'test2_failed' });
    }
  }
}
