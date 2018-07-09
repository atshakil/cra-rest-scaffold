import { combineReducers } from 'redux';
import dummy from './dummy';
import intl from './intl';
import config from './config';
import * as types from '../constants/ActionTypes';

const appReducer = combineReducers({
  intl,
  config,
  dummy
});

export default (state, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return appReducer(undefined, action);
    default:
      return appReducer(state, action);
  }
};
