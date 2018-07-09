import * as types from '../constants/ActionTypes';

const initialState = {
  dummyValue: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DUMMY_INCREMENT:
      return Object.assign({}, state, {dummyValue: state.dummyValue + 1});
    default:
      return state;
  }
};
