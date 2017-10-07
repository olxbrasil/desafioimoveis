import { combineReducers } from 'redux';

import homeReducer from './homeReducer';

const allReducers = combineReducers({
	homeReducer,
});

export default allReducers;
