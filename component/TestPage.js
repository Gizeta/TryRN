import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppPage from './AppPage';
import ViewSize from '../util/ScreenSize';

let styles = StyleSheet.create({
  cover: {
    backgroundColor: 'white',
    opacity: 0.8,
    height: ViewSize.height
  },
  title: {
    position: 'absolute',
    color: 'orangered',
    fontSize: 40,
    fontWeight: 'bold',
    top: 0,
    left: 10
  },
  bubble: {
    position: 'absolute',
    left: ViewSize.width * 0.06,
    top: 10,
    width: ViewSize.width * 0.86,
    height: ViewSize.height * 0.8,
    opacity: 0.7
  },
  contentContainer: {
    top: ViewSize.height * 0.05,
    left: ViewSize.width * 0.11,
    opacity: 1
  },
  icon: {
    width: ViewSize.width * 0.15,
    height: ViewSize.width * 0.15,
    top: -ViewSize.height * 0.25
  }
});

export default class TestPage extends Component {
  render() {
    return (
      <AppPage
        backgroundImage={this.props.backgroundImage}>
        <View style={styles.cover} />
        <Image
          source={require('../asset/image/bubble.png')}
          resizeMode="stretch"
          style={styles.bubble}>
          <View style={styles.contentContainer}>
            {this.props.children}
          </View>
        </Image>
        <Image
          source={require('../asset/image/character_icon.png')}
          style={styles.icon} />
        <Text style={styles.title}>{this.props.title || "DAY 1"}</Text>
      </AppPage>
    );
  }
}
