import React, {
  AppRegistry,
  Component
} from 'react-native';
import { Provider } from 'react-redux';
import Immutable from 'immutable';
import Orientation from 'react-native-orientation';

import App from './app/container/App';
import configureStore from './app/store/configureStore';

const initialState = Immutable.fromJS({
  user: {
    name: ''
  },
  course: {
    progress: 1,
    day1: {
      progress: 0,
      test: 0
    },
    reviewList: []
  },
  pack: {
    coin: 0,
    item: []
  }
});

class TryRN extends Component {
  constructor(props) {
    super(props);
    Orientation.lockToLandscape();
  }

  render() {
    return (
      <Provider store={configureStore(initialState)}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TryRN', () => TryRN);
