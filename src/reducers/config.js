import * as types from '../constants/ActionTypes';

const initialState = {
  isLoggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SESSION_STATE_SWITCH:
      return Object.assign({}, state, {isLoggedIn: action.isLoggedIn});
    default:
      return state;
  }
};
