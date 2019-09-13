import { combineReducers } from 'redux';

import teamData from './screens/Teams/duck';

export default combineReducers({
  team: teamData,
});
