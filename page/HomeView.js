import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import AppPage from '../component/AppPage';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    flex: 0,
    color: '#4BA687',
    fontSize: 50,
    fontWeight: '900',
    textAlign:'center'
  },
  button: {
    flex: 0
  }
});

let decorations = StyleSheet.create({
  top: {
    flex: 3
  },
  bottom: {
    flex: 2
  }
});

export default class HomeView extends Component {
  render() {
    return (
      <AppPage hasBackButton={false} hasSettingButton={false}>
        <View style={styles.container}>
          <View style={decorations.top} />
          <Text style={styles.title}>TRAVEL with PEALE</Text>
          <View style={decorations.top} />
          <TouchableOpacity activeOpacity={0.7}>
            <Image
              source={require('../asset/image/home/login.png')}
              style={styles.button} />
          </TouchableOpacity>
          <View style={decorations.bottom} />
        </View>
      </AppPage>
    );
  }
}
