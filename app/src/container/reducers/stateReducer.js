// @flow
import {
	handleActions,
} from 'redux-actions';

import actionTypes from '../actionTypes';
import ModelState from '../../../core/models/State';

type State = {
	states: ModelState[],
	selectedState: string,
	selectedBuy: number,
	selectedRent: number,
};

const initialState = {
	states: [],
	selectedState: 'RJ',
	selectedBuy: 0,
	selectedRent: 0,
};

const reducer = handleActions({
	[actionTypes.FETCH_STATES_SUCCESS]: (state: State = initialState, action) => {
		const newState = { ...state,
			states: action.payload,
		};

		const stateFilter = newState.states.filter(st => st.name === newState.selectedState);
		if (stateFilter.length) {
			newState.selectedBuy = stateFilter[0].buy;
			newState.selectedRent = stateFilter[0].rent;
		}

		return newState;
	},
	[actionTypes.CHANGE_STATE]: (state: State = initialState, action) => {
		const stateFilter = state.states.filter(st => st.name === action.payload);
		if (stateFilter.length) {
			return { ...state,
				selectedBuy: stateFilter[0].buy,
				selectedRent: stateFilter[0].rent,
				selectedState: action.payload,
			};
		}
		return { ...state,
			selectedBuy: 0,
			selectedRent: 0,
			selectedState: '',
		};
	},
}, initialState);

export default reducer;
