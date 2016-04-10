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
    left: ViewSize.width * 0.08
  },
  content: {
    top: -ViewSize.height * 0.05,
    left: ViewSize.width * 0.26,
    width: ViewSize.width * 0.7
  }
});

export default class Word3ThinkView extends Component {
  constructor(props) {
    super(props);

    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  render() {
    return (
      <WordDetailPage
        backgroundImage={require('../../../asset/day1/lesson5/word3_bg2.png')}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>hill</Text>
          <Text style={{ fontSize: 18 }}>  n.{"\n"}</Text>
          <Text style={{ fontSize: 20 }}> 小山</Text>
        </Text>
        <Text style={styles.content}>
          <Text style={{ fontSize: 32 }}>想到了这些</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>同义词: mountain(山)</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>climb(爬)/tree(树)</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>hill country(山区，丘陵地)/hillside(山坡)/hilltop(山顶)</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>as old as the hills(古老的)</Text>
        </Text>
      </WordDetailPage>
    );
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
