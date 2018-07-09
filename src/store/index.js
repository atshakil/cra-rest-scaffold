import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import throttle from 'lodash/throttle';
import rootReducer from '../reducers';
import { loadState, saveState } from '../services/localStorage';
import persistableStateTree from './persistableStateTree';
import { Settings } from '../config';

const initialState = loadState();
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
const store = createStore(rootReducer, initialState, composedEnhancers);

store.subscribe(throttle(
  () => saveState(persistableStateTree(store.getState())),
  Settings.local_storage_update_latency
));

export default store;
