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
import SelectableTextBlock from '../../../component/SelectableTextBlock';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  container: {
    width: ViewSize.width * 0.7,
    height: ViewSize.height * 0.6,
    marginTop: 20
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  input: {
    width: ViewSize.width * 0.5,
    top: 40,
    alignSelf: 'center'
  }
});

export default class Test2View extends Component {
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
          <Text style={styles.text}>What is tiger's favorite food? 请用英文回答。</Text>
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
    if (this.state.text.indexOf('meat') >= 0 || this.state.text.indexOf('Meat') >= 0) {
      this.props.navigator.push({ name: 'test2_bingo' });
    }
    else {
      this.props.navigator.push({ name: 'test_failed', next: 'test2_failed' });
    }
  }
}
