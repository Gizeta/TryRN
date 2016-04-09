import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from '../../../component/AppPage';
import ViewSize from '../../../util/ScreenSize';

let styles = StyleSheet.create({
  landImage: {
    width: ViewSize.height * 0.37 * 736 / 232,
    height: ViewSize.height * 0.37
  },
  landImageContainer: {
    top: ViewSize.height * 0.15,
    left: (ViewSize.width - ViewSize.height * 0.37 * 736 / 232) / 2
  },
  sunnyImage: {
    width: ViewSize.width * 332 / 1240,
    height: ViewSize.height * 270 / 628
  },
  sunnyImageContainer: {
    top: -ViewSize.height * 0.37,
    left: ViewSize.width - ViewSize.width * 332 / 1240
  },
  boatImage: {
    width: ViewSize.height * 0.3 * 180 / 246,
    height: ViewSize.height * 0.3
  },
  boatImageContainer: {
    top: -ViewSize.height * 0.31,
    left: ViewSize.width * 0.15
  },
  fish1Image: {
    width: ViewSize.height * 0.06 * 79 / 32,
    height: ViewSize.height * 0.06
  },
  fish1ImageContainer: {
    top: -ViewSize.height * 0.31,
    left: ViewSize.width * 0.23
  },
  fish2Image: {
    width: ViewSize.height * 0.1 * 85 / 45,
    height: ViewSize.height * 0.1
  },
  fish2ImageContainer: {
    top: -ViewSize.height * 0.5,
    left: ViewSize.width * 0.65
  },
  fish3Image: {
    width: ViewSize.height * 0.1 * 81 / 59,
    height: ViewSize.height * 0.1
  },
  fish3ImageContainer: {
    top: -ViewSize.height * 0.5,
    left: ViewSize.width * 0.75
  },
  button: {
    width: ViewSize.height * 0.1 * 200 / 67,
    height: ViewSize.height * 0.1
  },
  buttonContainer: {
    top: -ViewSize.height * 0.465,
    left: ViewSize.width - ViewSize.height * 0.1 * 202 / 67
  },
  title: {
    color: 'orangered',
    fontSize: 40,
    fontWeight: 'bold',
    top: -ViewSize.height * 1.45,
    left: 10
  },
  landText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  landTextContainer: {
    top: -ViewSize.height * 1.17,
    left: ViewSize.width * 0.46
  },
  sunnyText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sunnyTextContainer: {
    top: -ViewSize.height * 1.4,
    left: ViewSize.width * 0.85
  },
  lakeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  lakeTextContainer: {
    top: -ViewSize.height * 1.21,
    left: ViewSize.width * 0.78
  },
  boatText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  boatTextContainer: {
    top: -ViewSize.height * 1.21,
    left: ViewSize.width * 0.09
  },
  fishText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  fishTextContainer: {
    top: -ViewSize.height * 1.22,
    left: ViewSize.width * 0.8
  }
});

export default class LessonView extends Component {
  constructor(props) {
    super(props);
    this.onNavigateToLandPage = this.onNavigateToLandPage.bind(this);
  }

  render() {
    return (
      <AppPage backgroundImage={require('../../../asset/day1/lesson1/bg.jpg')}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={this.onNavigateToLandPage}
          style={styles.landImageContainer}>
          <Image
            source={require('../../../asset/day1/lesson1/land.png')}
            style={styles.landImage} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.sunnyImageContainer}>
          <Image
            source={require('../../../asset/day1/lesson1/sunny.png')}
            resizeMode="stretch"
            style={styles.sunnyImage} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.boatImageContainer}>
          <Image
            source={require('../../../asset/day1/lesson1/boat.png')}
            style={styles.boatImage} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.fish1ImageContainer}>
          <Image
            source={require('../../../asset/day1/lesson1/fish1.png')}
            style={styles.fish1Image} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.fish2ImageContainer}>
          <Image
            source={require('../../../asset/day1/lesson1/fish2.png')}
            style={styles.fish2Image} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.4}
          style={styles.fish3ImageContainer}>
          <Image
            source={require('../../../asset/day1/lesson1/fish3.png')}
            style={styles.fish3Image} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonContainer}>
          <Image
            source={require('../../../asset/image/go.png')}
            style={styles.button} />
        </TouchableOpacity>
        <Text style={styles.title}>Day 1</Text>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={this.onNavigateToLandPage}
          style={styles.landTextContainer}>
          <Text style={styles.landText}>land</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.sunnyTextContainer}>
          <Text style={styles.sunnyText}>sunny</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.lakeTextContainer}>
          <Text style={styles.lakeText}>lake</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.boatTextContainer}>
          <Text style={styles.boatText}>boat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.fishTextContainer}>
          <Text style={styles.fishText}>fish</Text>
        </TouchableOpacity>
      </AppPage>
    );
  }

  onNavigateToLandPage() {
    this.props.navigator.push({ name: 'word_land' });
  }
}
