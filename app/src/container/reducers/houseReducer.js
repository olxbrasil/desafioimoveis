// @flow
import {
	handleAction,
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
};

const reducer = handleAction(actionTypes.CHANGE_VALUE, (state: State = initialState, action) => ({
	...state,
	[action.payload.key]: action.payload.value,
}), initialState);

export default reducer;
