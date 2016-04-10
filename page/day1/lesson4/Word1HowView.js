import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WordDetailPage from '../../../component/WordDetailPage';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  word: {
    top: ViewSize.height * 0.1,
    left: ViewSize.width * 0.06
  },
  content: {
    top: -ViewSize.height * 0.05,
    left: ViewSize.width * 0.26,
    width: ViewSize.width * 0.7
  }
});

export default class Word1HowView extends Component {
  constructor(props) {
    super(props);

    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  render() {
    return (
      <WordDetailPage
        backgroundImage={require('../../../asset/day1/lesson4/word1_bg1.png')}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>panda</Text>
          <Text style={{ fontSize: 18 }}>  n.{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>   熊猫</Text>
        </Text>
        <Text style={styles.content}>
          <Text style={{ fontSize: 32 }}>该这么用</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>Peale: Look at that panda.{"\n"}You: It's black and white.</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>You: Are there many pandas in the world?{"\n"}Peale: No,there are very few.</Text>
        </Text>
      </WordDetailPage>
    );
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
