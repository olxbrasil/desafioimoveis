import {
	createAction,
} from 'redux-actions';

import actionTypes from '../actionTypes';

const changeValue = createAction(actionTypes.CHANGE_VALUE, (key, value) => ({
	key,
	value,
}));

export default {
	changeValue,
};
