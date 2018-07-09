import * as types from '../constants/ActionTypes';

export const switchLocale = locale => ({
  type: types.LOCALE_SWITCH,
  locale
});
