import { combineReducers } from 'redux';
import fetchingCharacters from './fetchingCharacters';
import characters from './characters';

export default combineReducers({
  fetchingCharacters,
  characters,
});
