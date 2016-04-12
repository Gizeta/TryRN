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
  container: {
    top: ViewSize.height * 0.2,
    flexDirection: 'row'
  },
  vbox: {
    marginLeft: 40,
    marginTop: 20,
    height: ViewSize.height * 0.7,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  hbox: {
    width: ViewSize.width * 0.55,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  item: {
    alignItems: 'center'
  },
  icon: {
    width: ViewSize.width * 0.14,
    height: ViewSize.width * 0.14
  },
  label: {
    width: ViewSize.width * 0.14,
    height: ViewSize.width * 0.14 * 60 / 165,
    paddingLeft: 10,
    flexDirection: 'row'
  },
  text: {
    fontSize: 20,
    color: 'black'
  },
  bubbleImg: {
    left: ViewSize.width * 0.05,
    width: ViewSize.width * 0.3,
    height: ViewSize.height * 0.35,
    paddingTop: 20,
    paddingLeft: 50
  },
  coinLeft: {
    width: 30,
    height: 30,
    marginTop: -27,
    marginLeft: 45
  },
  coin: {
    width: ViewSize.width * 0.14 * 55 / 165,
    height: ViewSize.width * 0.14 * 55 / 165,
    marginRight: 10
  },
  charaImg: {
    width: ViewSize.height * 0.55 * 290 / 311,
    height: ViewSize.height * 0.55,
    marginTop: -30
  },
  packImg: {
    width: ViewSize.height * 0.2 * 151 / 124,
    height: ViewSize.height * 0.2,
    marginTop: -ViewSize.height * 0.2,
    marginLeft: ViewSize.height * 0.35
  },
});

export default class ShopView extends Component {
  render() {
    return (
      <AppPage
        backgroundImage={require('../asset/image/shop/bg.png')}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.bubbleImg}
              resizeMode="stretch"
              source={require('../asset/image/bubble.png')}>
              <Text style={styles.text}>You have</Text>
              <Text style={styles.text}>100</Text>
              <Image
                style={styles.coinLeft}
                source={require('../asset/image/coin.png')} />
            </Image>
            <Image
              style={styles.charaImg}
              source={require('../asset/image/character.png')} />
            <Image
              style={styles.packImg}
              source={require('../asset/image/package.png')} />
          </View>
          <View style={styles.vbox}>
            <View style={styles.hbox}>
              <View style={styles.item}>
                <Image
                  source={require('../asset/image/shop/knife.png')}
                  style={styles.icon} />
                <Image
                  source={require('../asset/image/shop/label.png')}
                  style={styles.label}>
                  <Image
                    source={require('../asset/image/coin.png')}
                    style={styles.coin} />
                  <Text style={styles.text}>1</Text>
                </Image>
              </View>
              <View style={styles.item}>
                <Image
                  source={require('../asset/image/shop/rope.png')}
                  style={styles.icon} />
                <Image
                  source={require('../asset/image/shop/label.png')}
                  style={styles.label}>
                  <Image
                    source={require('../asset/image/coin.png')}
                    style={styles.coin} />
                  <Text style={styles.text}>2</Text>
                </Image>
              </View>
              <View style={styles.item}>
                <Image
                  source={require('../asset/image/shop/fire.png')}
                  style={styles.icon} />
                <Image
                  source={require('../asset/image/shop/label.png')}
                  style={styles.label}>
                  <Image
                    source={require('../asset/image/coin.png')}
                    style={styles.coin} />
                  <Text style={styles.text}>3</Text>
                </Image>
              </View>
            </View>
            <View style={styles.hbox}>
              <View style={styles.item}>
                <Image
                  source={require('../asset/image/shop/kettle.png')}
                  style={styles.icon} />
                <Image
                  source={require('../asset/image/shop/label.png')}
                  style={styles.label}>
                  <Image
                    source={require('../asset/image/coin.png')}
                    style={styles.coin} />
                  <Text style={styles.text}>3</Text>
                </Image>
              </View>
              <View style={styles.item}>
                <Image
                  source={require('../asset/image/shop/light.png')}
                  style={styles.icon} />
                <Image
                  source={require('../asset/image/shop/label.png')}
                  style={styles.label}>
                  <Image
                    source={require('../asset/image/coin.png')}
                    style={styles.coin} />
                  <Text style={styles.text}>10</Text>
                </Image>
              </View>
              <View style={styles.item}>
                <Image
                  source={require('../asset/image/shop/tent.png')}
                  style={styles.icon} />
                <Image
                  source={require('../asset/image/shop/label.png')}
                  style={styles.label}>
                  <Image
                    source={require('../asset/image/coin.png')}
                    style={styles.coin} />
                  <Text style={styles.text}>30</Text>
                </Image>
              </View>
            </View>
          </View>
        </View>
      </AppPage>
    );
  }
}
