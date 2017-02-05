import actionTypes from '../actionTypes';
import stateReducer from './stateReducer';

describe('stateReducer', () => {
	it('should return the initial state', () => {
		expect(
			stateReducer(undefined, {
				payload: [],
			})
		).to.eql({
			states: [],
			selectedState: '',
			selectedBuy: 0,
			selectedRent: 0,
		});
	});

	it('should handle FETCH_STATES_SUCCESS', () => {
		expect(
			stateReducer(undefined, {
				type: actionTypes.FETCH_STATES_SUCCESS,
				payload: [{
					name: 'RJ',
					buy: 100,
					rent: 100,
				}],
			})
		).to.deep.eql({
			selectedState: '',
			selectedBuy: 0,
			selectedRent: 0,
			states: [{
				buy: 100,
				name: 'RJ',
				rent: 100,
			}],
		});
	});
});
