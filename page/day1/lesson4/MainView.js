import React, {
  Component,
  Navigator
} from 'react-native';

import LessonView from './LessonView';

import Word1View from './Word1View';
import Word1HowView from './Word1HowView';
import Word1ThinkView from './Word1ThinkView';
import Word1KnowView from './Word1KnowView';

import Word2View from './Word2View';
import Word2HowView from './Word2HowView';
import Word2ThinkView from './Word2ThinkView';
import Word2KnowView from './Word2KnowView';

import Word3View from './Word3View';
import Word3HowView from './Word3HowView';
import Word3ThinkView from './Word3ThinkView';
import Word3KnowView from './Word3KnowView';

import Word4View from './Word4View';
import Word4HowView from './Word4HowView';
import Word4ThinkView from './Word4ThinkView';
import Word4KnowView from './Word4KnowView';

import Word5View from './Word5View';
import Word5HowView from './Word5HowView';
import Word5ThinkView from './Word5ThinkView';
import Word5KnowView from './Word5KnowView';

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
      case 'word1':
        Component = Word1View;
        break;
      case 'word1_how':
        Component = Word1HowView;
        break;
      case 'word1_think':
        Component = Word1ThinkView;
        break;
      case 'word1_know':
        Component = Word1KnowView;
        break;

      case 'word2':
        Component = Word2View;
        break;
      case 'word2_how':
        Component = Word2HowView;
        break;
      case 'word2_think':
        Component = Word2ThinkView;
        break;
      case 'word2_know':
        Component = Word2KnowView;
        break;

      case 'word3':
        Component = Word3View;
        break;
      case 'word3_how':
        Component = Word3HowView;
        break;
      case 'word3_think':
        Component = Word3ThinkView;
        break;
      case 'word3_know':
        Component = Word3KnowView;
        break;

      case 'word4':
        Component = Word4View;
        break;
      case 'word4_how':
        Component = Word4HowView;
        break;
      case 'word4_think':
        Component = Word4ThinkView;
        break;
      case 'word4_know':
        Component = Word4KnowView;
        break;

      case 'word5':
        Component = Word5View;
        break;
      case 'word5_how':
        Component = Word5HowView;
        break;
      case 'word5_think':
        Component = Word5ThinkView;
        break;
      case 'word5_know':
        Component = Word5KnowView;
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
