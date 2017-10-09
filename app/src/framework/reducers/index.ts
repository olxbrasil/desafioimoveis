import { combineReducers } from 'redux';

import stateReducer from './StateReducer';
import simulatorReducer from './SimulatorReducer';

const allReducers = combineReducers({
  state: stateReducer,
  simulator: simulatorReducer,
});

export default allReducers;