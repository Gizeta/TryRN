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
    left: ViewSize.width * 0.08
  },
  content: {
    top: -ViewSize.height * 0.05,
    left: ViewSize.width * 0.26,
    width: ViewSize.width * 0.7
  }
});

export default class Word1KnowView extends Component {
  constructor(props) {
    super(props);

    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  render() {
    return (
      <WordDetailPage
        backgroundImage={require('../../../asset/day1/lesson5/word1_bg3.png')}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>lion</Text>
          <Text style={{ fontSize: 18 }}>  n.{"\n"}</Text>
          <Text style={{ fontSize: 24 }}> 狮子</Text>
        </Text>
        <Text style={styles.content}>
          <Text style={{ fontSize: 32 }}>应该知道这些</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>    狮子多生活在草原上，喜集群狩猎。雌狮是主要的猎手，但争夺地盘主要靠雄狮。</Text>
        </Text>
      </WordDetailPage>
    );
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
