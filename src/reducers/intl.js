import * as types from '../constants/ActionTypes';
import { en, vi, ja } from '../locales';

const initialState = {
  locale: 'en',
  messages: en,
  locales: [
    {locale: 'en', messages: en},
    {locale: 'vi', messages: vi},
    {locale: 'ja', messages: ja}
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOCALE_SWITCH:
      const messages =
        state.locales.find(nth => nth.locale === action.locale).messages;
      return Object.assign({}, state, {locale: action.locale, messages});
    default:
      return state;
  }
};
