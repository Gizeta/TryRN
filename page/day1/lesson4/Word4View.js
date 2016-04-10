import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import WordPage from '../../../component/WordPage';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  word: {
    top: ViewSize.height * 0.37,
    left: ViewSize.width * 0.2
  }
});

export default class Word4View extends Component {
  constructor(props) {
    super(props);

    this.onNavigateToHow = this.onNavigateToHow.bind(this);
    this.onNavigateToThink = this.onNavigateToThink.bind(this);
    this.onNavigateToKnow = this.onNavigateToKnow.bind(this);
    this.onNavigateBack = this.onNavigateBack.bind(this);
  }

  render() {
    return (
      <WordPage
        backgroundImage={require('../../../asset/day1/lesson4/word4.png')}
        onNavigateToHow={this.onNavigateToHow}
        onNavigateToThink={this.onNavigateToThink}
        onNavigateToKnow={this.onNavigateToKnow}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>black</Text>
          <Text style={{ fontSize: 18 }}>  adj.{"\n"}</Text>
          <Text style={{ fontSize: 24 }}> 黑色的</Text>
        </Text>
      </WordPage>
    );
  }

  onNavigateToHow() {
    this.props.navigator.push({ name: 'word4_how' });
  }

  onNavigateToThink() {
    this.props.navigator.push({ name: 'word4_think' });
  }

  onNavigateToKnow() {
    this.props.navigator.push({ name: 'word4_know' });
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
