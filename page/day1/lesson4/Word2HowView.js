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
    top: ViewSize.height * 0.11,
    left: ViewSize.width * 0.06
  },
  content: {
    top: -ViewSize.height * 0.05,
    left: ViewSize.width * 0.26,
    width: ViewSize.width * 0.7
  }
});

export default class Word2HowView extends Component {
  constructor(props) {
    super(props);

    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  render() {
    return (
      <WordDetailPage
        backgroundImage={require('../../../asset/day1/lesson4/word2_bg1.png')}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>grass</Text>
          <Text style={{ fontSize: 18 }}>  n.{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>    草</Text>
        </Text>
        <Text style={styles.content}>
          <Text style={{ fontSize: 32 }}>该这么用</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>Look! There are flowers in the grass.</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>Keep off the grass.</Text>
        </Text>
      </WordDetailPage>
    );
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
