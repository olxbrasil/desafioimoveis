import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import houseReducer from './houseReducer';

const allReducers = combineReducers({
	houseReducer,
	routing: routerReducer,
});

export default allReducers;
