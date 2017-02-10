// @flow
import {
	handleActions,
} from 'redux-actions';

import actionTypes from '../actionTypes';

type State = {
	buy: number,
	rent: number,
	livePerYear: number,
	taxForYear: number,
};

const initialState = {
	buy: 0,
	rent: 0,
	livePerYear: 10,
	taxForYear: 115,
	installment: 0,
};

const reducer = handleActions({
	[actionTypes.CHANGE_VALUE]: (state: State = initialState, action) => ({
		...state,
		[action.payload.key]: action.payload.value,
	}),
	[actionTypes.CALCULATE]: (state: State = initialState, action) => ({
		...state,
		installment: action.payload,
	}),
}, initialState);

export default reducer;
