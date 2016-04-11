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

import TestEntranceView from './TestEntranceView';
import TestIntroView from './TestIntroView';
import TestFailedView from './TestFailedView';
import Test1View from './Test1View';
import Test1BingoView from './Test1BingoView';
import Test1FailedView from './Test1FailedView';
import Test2View from './Test2View';
import Test2BingoView from './Test2BingoView';
import Test2FailedView from './Test2FailedView';
import Test3View from './Test3View';
import Test3BingoView from './Test3BingoView';
import Test3FailedView from './Test3FailedView';
import GoView from './GoView';
import Go2View from './Go2View';

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

      case 'test_entrance':
        Component = TestEntranceView;
        break;
      case 'test_intro':
        Component = TestIntroView;
        break;
      case 'test_failed':
        Component = TestFailedView;
        break;
      case 'test1':
        Component = Test1View;
        break;
      case 'test1_bingo':
        Component = Test1BingoView;
        break;
      case 'test1_failed':
        Component = Test1FailedView;
        break;
      case 'test2':
        Component = Test2View;
        break;
      case 'test2_bingo':
        Component = Test2BingoView;
        break;
      case 'test2_failed':
        Component = Test2FailedView;
        break;
      case 'test3':
        Component = Test3View;
        break;
      case 'test3_bingo':
        Component = Test3BingoView;
        break;
      case 'test3_failed':
        Component = Test3FailedView;
        break;
      case 'go':
        Component = GoView;
        break;
      case 'go2':
        Component = Go2View;
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
        initialRoute={{ name: 'test3_bingo' }}
        configureScene={() => Navigator.SceneConfigs.FadeAndroid}
        renderScene={this.renderScene} />
    );
  }
}
