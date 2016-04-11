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
    marginTop: 10,
    fontSize: 22,
    color: 'black'
  },
  input: {
    width: ViewSize.width * 0.5,
    top: 40,
    alignSelf: 'center'
  }
});

export default class Test3View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson5/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>Which is your favorite animal, bird or lion?请用英文回答，并说出理由。</Text>
          <TextInput
            onChangeText={(text) => this.setState({text})}
            onSubmitEditing={this.onSubmitEditing.bind(this)}
            style={styles.input} />
        </View>
      </TestPage>
    );
  }

  onSubmitEditing() {
    if (this.state.text == '') return;
    if (this.state.text.length > 0) {
      this.props.navigator.push({ name: 'test3_bingo' });
    }
    else {
      this.props.navigator.push({ name: 'test_failed', next: 'test3_failed' });
    }
  }
}
