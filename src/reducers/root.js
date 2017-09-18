import { combineReducers } from 'redux';
import settingsReducer from './settings';

const appReducer = combineReducers({
  settings: settingsReducer
});

export default appReducer;
