import React, {
  Component,
  Image,
  StyleSheet,
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
    width: ViewSize.width,
    height: ViewSize.height
  },
  icon: {
    width: ViewSize.height * 0.25,
    height: ViewSize.height * 0.25,
    top: ViewSize.height * 0.75
  },
  button: {
    width: ViewSize.height * 0.1 * 200 / 67,
    height: ViewSize.height * 0.1
  },
  buttonContainer: {
    top: ViewSize.height * 0.61,
    left: ViewSize.width * 0.82
  },
  content: {
    top: -ViewSize.height * 0.355
  }
});

export default class WordDetailPage extends Component {
  static propTypes = {
    backgroundImage: React.PropTypes.number
  };

  static defaultProps = {
    backgroundImage: require('../asset/day1/lesson1/word_land_bg1.png')
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
            <View>
              <Image
                source={require('../asset/image/character_icon.png')}
                style={styles.icon} />
              <TouchableOpacity
                activeOpacity={0.4}
                onPress={this.props.onNavigateBack}
                style={styles.buttonContainer}>
                <Image
                  source={require('../asset/image/back.png')}
                  style={styles.button} />
              </TouchableOpacity>
              <View style={styles.content}>
                {this.props.children}
              </View>
            </View>
          </Image>
        </View>
      </AppPage>
    );
  }
}
