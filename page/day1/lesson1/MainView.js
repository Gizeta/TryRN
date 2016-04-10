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
