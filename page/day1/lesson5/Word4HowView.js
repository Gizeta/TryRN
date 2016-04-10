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

export default class Word4HowView extends Component {
  constructor(props) {
    super(props);

    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  render() {
    return (
      <WordDetailPage
        backgroundImage={require('../../../asset/day1/lesson5/word4_bg1.png')}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>flower</Text>
          <Text style={{ fontSize: 18 }}>  n.{"\n"}</Text>
          <Text style={{ fontSize: 24 }}>花；花朵</Text>
        </Text>
        <Text style={styles.content}>
          <Text style={{ fontSize: 32 }}>该这么用</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>Look! There are flowers in the grass.And I like flowers.</Text>
          <Text style={{ fontSize: 20 }}>{"\n"}{"\n"}</Text>
          <Text style={{ fontSize: 26 }}>You:What is Grandma doing in the garden?{"\n"}Peale: She's watering the flowers.</Text>
        </Text>
      </WordDetailPage>
    );
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
