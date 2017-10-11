import { combineReducers } from 'redux';

import homeReducer from './homeReducer';
import rangeReducer from './rangeReducer';

const allReducers = combineReducers({
	homeReducer,
	rangeReducer,
});

export default allReducers;
