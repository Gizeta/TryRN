import React, {
  Component,
  Navigator
} from 'react-native';

import HomeView from '../../page/HomeView';
import WelcomeView from '../../page/WelcomeView';
import LoginView from '../../page/LoginView';
import MapView from '../../page/MapView';
import Lesson1_1View from '../../page/day1/lesson1/MainView';
import Lesson1_2View from '../../page/day1/lesson2/MainView';
import Lesson1_3View from '../../page/day1/lesson3/MainView';
import Lesson1_4View from '../../page/day1/lesson4/MainView';
import Lesson1_5View from '../../page/day1/lesson5/MainView';

import NavigatorHelper from '../../util/NavigatorHelper';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = null;
    NavigatorHelper.update(navigator);
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
      case 'lesson1_2':
        Component = Lesson1_2View;
        break;
      case 'lesson1_3':
        Component = Lesson1_3View;
        break;
      case 'lesson1_4':
        Component = Lesson1_4View;
        break;
      case 'lesson1_5':
        Component = Lesson1_5View;
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
