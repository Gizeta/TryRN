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
    top: ViewSize.height * 0.35,
    left: ViewSize.width * 0.22
  }
});

export default class Word3View extends Component {
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
        backgroundImage={require('../../../asset/day1/lesson5/word3.png')}
        onNavigateToHow={this.onNavigateToHow}
        onNavigateToThink={this.onNavigateToThink}
        onNavigateToKnow={this.onNavigateToKnow}
        onNavigateBack={this.onNavigateBack}>
        <Text style={styles.word}>
          <Text style={{ fontSize: 24 }}>hill</Text>
          <Text style={{ fontSize: 18 }}>  n.{"\n"}</Text>
          <Text style={{ fontSize: 20 }}> 小山</Text>
        </Text>
      </WordPage>
    );
  }

  onNavigateToHow() {
    this.props.navigator.push({ name: 'word3_how' });
  }

  onNavigateToThink() {
    this.props.navigator.push({ name: 'word3_think' });
  }

  onNavigateToKnow() {
    this.props.navigator.push({ name: 'word3_know' });
  }

  onNavigateBack() {
    this.props.navigator.pop();
  }
}
