// @flow

import {
	createAction,
} from 'redux-actions';

import actionTypes from '../actionTypes';

const changeValue = createAction(actionTypes.CHANGE_VALUE, (key: string, value: number) => ({
	key,
	value,
}));

export default {
	changeValue,
};
