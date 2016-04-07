import { createStore } from 'redux';
import rootReducer from '../reducer';

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducer', () => {
      const nextReducer = require('../reducer').default
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
