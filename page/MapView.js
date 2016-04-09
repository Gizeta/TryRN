import React, {
  Component,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import AppPage from '../component/AppPage';
import ViewSize from '../util/ScreenSize';

let styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: ViewSize.height * 2218 / 628,
    height: ViewSize.height
  },
  image1: {
    width: ViewSize.height * 254 / 628,
    height: ViewSize.height * 203 / 628
  },
  image1Container: {
    marginLeft: -ViewSize.height * 1880 / 628,
    marginTop: ViewSize.height * 180 / 628
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  text1: {
    marginLeft: -ViewSize.height * 1812 / 628,
    marginTop: -ViewSize.height * 14 / 628,
    transform: [{rotate: '6deg'}]
  },
  text2: {
    marginLeft: -ViewSize.height * 1489 / 628,
    marginTop: -ViewSize.height * 28 / 628
  },
  text3: {
    marginLeft: -ViewSize.height * 1170 / 628,
    marginTop: -ViewSize.height * 56 / 628,
    transform: [{rotate: '356deg'}]
  },
  text4: {
    marginLeft: -ViewSize.height * 820 / 628,
    marginTop: -ViewSize.height * 56 / 628,
    transform: [{rotate: '4deg'}]
  },
  text5: {
    marginLeft: -ViewSize.height * 515 / 628,
    marginTop: -ViewSize.height * 44 / 628
  },
  text6: {
    marginLeft: -ViewSize.height * 180 / 628,
    marginTop: -ViewSize.height * 75 / 628,
    transform: [{rotate: '354deg'}]
  }
});

export default class MapView extends Component {
  constructor(props) {
    super(props);
    this.onDay1ButtonClick = this.onDay1ButtonClick.bind(this);
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        horizontal={true}>
        <View>
          <Image
            source={require('../asset/image/map/map.png')}
            style={styles.background} />
        </View>
        <View>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={this.onDay1ButtonClick}
            style={styles.image1Container}>
            <Image
              source={require('../asset/image/map/day1.png')}
              style={styles.image1} />
          </TouchableOpacity>
          <Text style={[styles.text, styles.text1]}>Day 1</Text>
          <Text style={[styles.text, styles.text2]}>Day 2</Text>
          <Text style={[styles.text, styles.text3]}>Day 3</Text>
          <Text style={[styles.text, styles.text4]}>Day 4</Text>
          <Text style={[styles.text, styles.text5]}>Day 5</Text>
          <Text style={[styles.text, styles.text6]}>Day 6</Text>
        </View>
      </ScrollView>
    );
  }

  onDay1ButtonClick() {
    this.props.navigator.push({ name: 'lesson1_1' });
  }
}
