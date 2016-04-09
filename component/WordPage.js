import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from './AppPage';
import ViewSize from '../util/ScreenSize';

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: ViewSize.height * 1240 / 628,
    height: ViewSize.height,
    marginLeft: -ViewSize.width * 0.1
  },
  content: {
    marginLeft: ViewSize.width * 0.1
  },
  text: {
    fontSize: 28
  },
  text1Container: {
    top: ViewSize.height * 0.2,
    left: ViewSize.width * 0.525
  },
  text2Container: {
    top: ViewSize.height * 0.36,
    left: ViewSize.width * 0.525
  },
  text3Container: {
    top: ViewSize.height * 0.53,
    left: ViewSize.width * 0.525
  },
  button: {
    width: ViewSize.height * 0.1 * 200 / 67,
    height: ViewSize.height * 0.1
  },
  buttonContainer: {
    top: ViewSize.height * 0.55,
    left: ViewSize.width * 0.81
  },
  mainContent: {
    top: -ViewSize.height * 0.43
  }
});

export default class WordPage extends Component {
  static propTypes = {
    backgroundImage: React.PropTypes.number
  };

  static defaultProps = {
    backgroundImage: require('../asset/day1/lesson1/word_land.png')
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppPage hasBackground={false}>
        <View style={styles.container}>
          <Image
            source={this.props.backgroundImage}
            style={styles.background}>
            <View style={styles.content}>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.onNavigateToHow}
                style={styles.text1Container}>
                <Text style={styles.text}>该怎么用？</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.onNavigateToThink}
                style={styles.text2Container}>
                <Text style={styles.text}>想到什么？</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.onNavigateToKnow}
                style={styles.text3Container}>
                <Text style={styles.text}>你知道吗？</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.onNavigateBack}
                style={styles.buttonContainer}>
                <Image
                  source={require('../asset/image/back.png')}
                  style={styles.button} />
              </TouchableOpacity>
              <View style={styles.mainContent}>
                {this.props.children}
              </View>
            </View>
          </Image>
        </View>
      </AppPage>
    );
  }
}
