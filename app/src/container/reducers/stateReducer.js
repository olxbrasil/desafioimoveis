// @flow
import {
	handleAction,
} from 'redux-actions';

import actionTypes from '../actionTypes';
import ModelState from '../../../core/models/State';

type State = {
	states: ModelState[],
	selectedState: string,
	selectedBuy: number,
	sectedRent: number,
};

const initialState = {
	states: [],
	selectedState: '',
	selectedBuy: 0,
	sectedRent: 0,
};

const reducer = handleAction(actionTypes.FETCH_STATES_SUCCESS,
	(state: State = initialState, action) => ({
		...state,
		states: action.payload,
	}), initialState);

export default reducer;
