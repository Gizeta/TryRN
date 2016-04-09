import React, {
  Component,
  Navigator
} from 'react-native';

import LessonView from './LessonView';
import WordLandView from './WordLandView';
import WordLandHowView from './WordLandHowView';
import WordLandThinkView from './WordLandThinkView';
import WordLandKnowView from './WordLandKnowView';

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = null;
    switch (route.name) {
      case 'lesson':
        Component = LessonView;
        break;
      case 'word_land':
        Component = WordLandView;
        break;
      case 'word_land_how':
        Component = WordLandHowView;
        break;
      case 'word_land_think':
        Component = WordLandThinkView;
        break;
      case 'word_land_know':
        Component = WordLandKnowView;
        break;
      default:
        Component = LessonView;
        break;
    }
    return <Component navigator={navigator} />;
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'lesson' }}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.renderScene} />
    );
  }
}
