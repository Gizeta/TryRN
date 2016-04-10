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
    left: ViewSize.width * 0.03
  },
  content: {
    top: -ViewSize.height * 0.05,
    left: ViewSize.width * 0.26,
    width: ViewSize.width * 0.7
  }
});

export default class Word5KnowView extends Component {
  constructor(props) {
    super(props);

    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  render() {
    return (
      <WordDetailPage
        backgroundImage={require('../../../asset/day1/lesson2/word_ticket_office_bg3.png')}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>ticket office</Text>
          <Text style={{ fontSize: 18 }}>{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>     售票处</Text>
        </Text>
        <Text style={styles.content}>
          <Text style={{ fontSize: 32 }}>应该知道这些</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>目前还没有哦～</Text>
        </Text>
      </WordDetailPage>
    );
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
