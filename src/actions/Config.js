import * as types from '../constants/ActionTypes';

export const login = () => ({
  type: types.SESSION_STATE_SWITCH,
  isLoggedIn: true
});
