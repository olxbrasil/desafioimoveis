import { combineReducers } from 'redux';

import stateReducer from './StateReducer';

const allReducers = combineReducers({
  state: stateReducer,
});

export default allReducers;