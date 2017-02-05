import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import houseReducer from './houseReducer';
import stateReducer from './stateReducer';

const allReducers = combineReducers({
	houseReducer,
	stateReducer,
	routing: routerReducer,
});

export default allReducers;
