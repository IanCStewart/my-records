/* global window */
/* eslint no-underscore-dangle: ["error", { "allow": ["__SETTINGS__"] }] */
import _ from 'lodash';
import { SETTINGS_ADD, SETTINGS_GET } from '../actions/types';
import defaults from '../defaults.json';

const getSettings = () => {
  const settings = _.get(window, '__SETTINGS__', {});

  return _.assignIn({}, defaults, settings);
};

const INITIAL_STATE = {
  data: getSettings(),
  loading: false,
  error: '',
  settings: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SETTINGS_ADD:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.payload
        }
      };
    case SETTINGS_GET:
      return {
        ...state,
        loading: true,
      };
    default: return state;
  }
}
