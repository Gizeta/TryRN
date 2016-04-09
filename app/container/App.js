import React, {
  Component,
  Navigator
} from 'react-native';

import HomeView from '../../page/HomeView';
import WelcomeView from '../../page/WelcomeView';
import LoginView from '../../page/LoginView';
import MapView from '../../page/MapView';
import Lesson1_1View from '../../page/day1/lesson1/MainView';

export default class App extends Component {
  constructor(props) {
    super(props);
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
      case 'login':
        Component = LoginView;
        break;
      case 'map':
        Component = MapView;
        break;
      case 'lesson1_1':
        Component = Lesson1_1View;
        break;
      default:
        Component = LoginView;
        break;
    }
    return <Component navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home' }}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.renderScene} />
    );
  }
}
