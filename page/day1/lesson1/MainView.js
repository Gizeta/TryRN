import React, {
  Component,
  Navigator
} from 'react-native';

import LessonView from './LessonView';

import WordSunnyView from './WordSunnyView';
import WordSunnyHowView from './WordSunnyHowView';
import WordSunnyThinkView from './WordSunnyThinkView';
import WordSunnyKnowView from './WordSunnyKnowView';

import WordLakeView from './WordLakeView';
import WordLakeHowView from './WordLakeHowView';
import WordLakeThinkView from './WordLakeThinkView';
import WordLakeKnowView from './WordLakeKnowView';

import WordFishView from './WordFishView';
import WordFishHowView from './WordFishHowView';
import WordFishThinkView from './WordFishThinkView';
import WordFishKnowView from './WordFishKnowView';

import WordBoatView from './WordBoatView';
import WordBoatHowView from './WordBoatHowView';
import WordBoatThinkView from './WordBoatThinkView';
import WordBoatKnowView from './WordBoatKnowView';

import WordLandView from './WordLandView';
import WordLandHowView from './WordLandHowView';
import WordLandThinkView from './WordLandThinkView';
import WordLandKnowView from './WordLandKnowView';

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

import NavigatorHelper from '../../../util/NavigatorHelper';

export default class MainView extends Component {
  constructor(props) {
    super(props);
  }

  renderScene(route, navigator) {
    let Component = null;
    NavigatorHelper.update2(navigator);
    let params1 = '';
    let params2 = '';
    switch (route.name) {
      case 'lesson':
        params1 = `key=day1&action=progress&value=1`;
        Component = LessonView;
        break;
      case 'word_sunny':
        Component = WordSunnyView;
        break;
      case 'word_sunny_how':
        Component = WordSunnyHowView;
        break;
      case 'word_sunny_think':
        Component = WordSunnyThinkView;
        break;
      case 'word_sunny_know':
        Component = WordSunnyKnowView;
        break;

      case 'word_lake':
        Component = WordLakeView;
        break;
      case 'word_lake_how':
        Component = WordLakeHowView;
        break;
      case 'word_lake_think':
        Component = WordLakeThinkView;
        break;
      case 'word_lake_know':
        Component = WordLakeKnowView;
        break;

      case 'word_fish':
        Component = WordFishView;
        break;
      case 'word_fish_how':
        Component = WordFishHowView;
        break;
      case 'word_fish_think':
        Component = WordFishThinkView;
        break;
      case 'word_fish_know':
        Component = WordFishKnowView;
        break;

      case 'word_boat':
        Component = WordBoatView;
        break;
      case 'word_boat_how':
        Component = WordBoatHowView;
        break;
      case 'word_boat_think':
        Component = WordBoatThinkView;
        break;
      case 'word_boat_know':
        Component = WordBoatKnowView;
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
        params1 = `key=day1&action=test&value=1`;
        Component = Test1View;
        break;
      case 'test1_bingo':
        Component = Test1BingoView;
        break;
      case 'test1_failed':
        Component = Test1FailedView;
        break;
      case 'test2':
        params1 = `key=day1&action=test&value=2`;
        Component = Test2View;
        break;
      case 'test2_bingo':
        Component = Test2BingoView;
        break;
      case 'test2_failed':
        Component = Test2FailedView;
        break;
      case 'test3':
        params1 = `key=day1&action=test&value=3`;
        Component = Test3View;
        break;
      case 'test3_bingo':
        Component = Test3BingoView;
        break;
      case 'test3_failed':
        Component = Test3FailedView;
        break;
      case 'go':
        params1 = `key=day1&action=test&value=0`;
        Component = GoView;
        break;
      default:
        Component = LessonView;
        break;
    }

    /*if (params1 != '') {
      fetch(`http://try-rn.gizeta.me/course/update?username=${this.props.state.user.name}&${params1}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
    }
    if (params2 != '') {
      fetch(`http://try-rn.gizeta.me/package/update?username=${this.props.state.user.name}&${params2}`, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache'
        }
      });
    }*/
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
