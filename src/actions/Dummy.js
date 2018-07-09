import * as types from '../constants/ActionTypes';
import { Url } from '../config/path';

export const incrementDummyValue = () => ({
  type: types.DUMMY_INCREMENT
});

export const setDummyValue = value => ({
  type: types.SET_DUMMY_VALUE,
  value
});

export const updateDummyValue = () =>
  dispatch => {
    fetch(Url.api.dummy)
      .then(response => response.json().then(data => dispatch(setDummyValue(data.value))))
      .catch(error => console.error(error))
  };
