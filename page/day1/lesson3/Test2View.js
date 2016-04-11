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
    height: ViewSize.height * 0.6
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  text1: {
    top: 20,
    height: ViewSize.height * 0.2,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text2: {
    width: ViewSize.width * 0.65,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    width: ViewSize.height * 0.1 * 200 / 67,
    height: ViewSize.height * 0.1
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 45
  }
});

export default class Test2View extends Component {
  constructor(props) {
    super(props);

    this.value = 0;
  }

  render() {
    return (
      <TestPage
        backgroundImage={require('../../../asset/day1/lesson3/next.jpg')}>
        <View style={styles.container}>
          <Text style={styles.text}>请你从以下单词中，挑选出所有可以正确描写长颈鹿的词。</Text>
          <View style={styles.text1}>
            <View style={styles.text2}>
              <SelectableTextBlock
                onCheck={this.bindOnPressEvent(1).bind(this)}
                onUncheck={this.bindOnPressEvent(-1).bind(this)}
                text="brown" />
              <SelectableTextBlock
                onCheck={this.bindOnPressEvent(2).bind(this)}
                onUncheck={this.bindOnPressEvent(-2).bind(this)}
                text="black" />
              <SelectableTextBlock
                onCheck={this.bindOnPressEvent(4).bind(this)}
                onUncheck={this.bindOnPressEvent(-4).bind(this)}
                text="white" />
            </View>
            <View style={styles.text2}>
              <SelectableTextBlock
                onCheck={this.bindOnPressEvent(8).bind(this)}
                onUncheck={this.bindOnPressEvent(-8).bind(this)}
                text="tall" />
              <SelectableTextBlock
                onCheck={this.bindOnPressEvent(16).bind(this)}
                onUncheck={this.bindOnPressEvent(-16).bind(this)}
                text="thin" />
              <SelectableTextBlock
                onCheck={this.bindOnPressEvent(32).bind(this)}
                onUncheck={this.bindOnPressEvent(-32).bind(this)}
                text="lovely" />
              <SelectableTextBlock
                onCheck={this.bindOnPressEvent(64).bind(this)}
                onUncheck={this.bindOnPressEvent(-64).bind(this)}
                text="fat" />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.onCheck.bind(this)}
            style={styles.buttonContainer}>
            <Image
              source={require('../../../asset/image/select.png')}
              style={styles.button} />
          </TouchableOpacity>
        </View>
      </TestPage>
    );
  }

  bindOnPressEvent(value) {
    return function() {
      this.value += value;
    }
  }

  onCheck() {
    if (this.value == (1+4+8+16+32)) {
      this.props.navigator.push({ name: 'test2_bingo' });
    }
    else {
      this.props.navigator.push({ name: 'test_failed', next: 'test2_failed' });
    }
  }
}
