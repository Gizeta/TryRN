import React, {
  AppRegistry,
  Component,
  Navigator,
  View
} from 'react-native';
import Orientation from 'react-native-orientation';

import HomeView from './page/HomeView';
import WelcomeView from './page/WelcomeView';

class TryRN extends Component {
  constructor(props) {
    super(props)
    Orientation.lockToLandscape();
  }

  renderScene(route, navigator) {
    let Component = null;
    switch (route.name) {
      case 'home':
        Component = HomeView;
        break;
      case 'welcome':
        Component = WelcomeView;
        break;
      default:
        Component = HomeView;
        break;
    }
    return <Component navigator={navigator} />;
  }

  render() {
    let initialRoute = {name: 'home'};
    return (
      <Navigator
        initialRoute={initialRoute}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.renderScene} />
    );
  }
}

AppRegistry.registerComponent('TryRN', () => TryRN);
