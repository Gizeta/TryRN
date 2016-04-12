import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from '../component/AppPage';
import ViewSize from '../util/ScreenSize';

let styles = StyleSheet.create({
  vbox: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  hbox: {
    top: 5,
    width: ViewSize.width - 60,
    marginLeft: 5,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    alignItems: 'center'
  },
  icon: {
    width: ViewSize.width * 0.12,
    height: ViewSize.width * 0.12
  },
  text: {
    fontSize: 20
  },
  button: {
    width: ViewSize.height * 0.08 * 200 / 67,
    height: ViewSize.height * 0.08
  }
});

export default class PackageView extends Component {
  render() {
    return (
      <AppPage
        backgroundImage={require('../asset/image/shop/package_bg.png')}>
        <View style={styles.vbox}>
          <View style={styles.hbox}>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/knife.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/light.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/rope.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/fire.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/tent.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/kettle.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
          </View>
          <View style={styles.hbox}>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/axe.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/light2.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/map.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/lighter.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/tent2.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/pot.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
          </View>
          <View style={styles.hbox}>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/cutter.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/flashlight.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/compass.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/camera.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/trailer.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
            <View style={styles.item}>
              <Image
                source={require('../asset/image/shop/tableware.png')}
                style={styles.icon} />
              <Text style={styles.text}>0</Text>
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{ marginTop: 5 }}
            onPress={this.onNextButtonClick.bind(this)}>
            <Image
              source={require('../asset/image/shop/gotostore.png')}
              style={styles.button} />
          </TouchableOpacity>
        </View>
      </AppPage>
    );
  }

  onNextButtonClick() {
    this.props.navigator.push({ name: 'shop' });
  }
}
