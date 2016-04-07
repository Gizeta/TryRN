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
  courses: {
    day1: 0,
    day2: 0
  },
  items: []
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
