import {
	createActions,
	createAction,
} from 'redux-actions';

import StateController from '../../../core/controllers/StateController';
import actionTypes from '../actionTypes';

const fetchStateSuccess = createAction(actionTypes.FETCH_STATES_SUCCESS);

export const {
	fetchStates,
	changeState,
} = createActions({
	[actionTypes.FETCH_STATES]: () => (async(dispatch) => {
		const data = await StateController.getStates();
		dispatch(fetchStateSuccess(data));
	}),
	[actionTypes.CHANGE_STATE]: name => name,
});
