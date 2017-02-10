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
			selectedState: 'RJ',
			selectedBuy: 100,
			selectedRent: 100,
			states: [{
				buy: 100,
				name: 'RJ',
				rent: 100,
			}],
		});
	});
	it('Should return selected Buy and Rent with value', () => {
		expect(
			stateReducer({
				states: [{
						name: 'AL',
						buy: 53600,
						rent: 670
					},
					{
						name: 'AP',
						buy: 48000,
						rent: 600
					}
				],
				selectedState: '',
				selectedBuy: 0,
				selectedRent: 0,
			}, {
				type: actionTypes.CHANGE_STATE,
				payload: 'AL',
			})
		).to.deep.eql({
			selectedState: 'AL',
			selectedBuy: 53600,
			selectedRent: 670,
			states: [{
					name: 'AL',
					buy: 53600,
					rent: 670
				},
				{
					name: 'AP',
					buy: 48000,
					rent: 600
				}
			],
		});
	});
	it('Should return selected Buy and Rent without value', () => {
		expect(
			stateReducer({
				states: [{
						name: 'AL',
						buy: 53600,
						rent: 670
					},
					{
						name: 'AP',
						buy: 48000,
						rent: 600
					}
				],
				selectedState: '',
				selectedBuy: 0,
				selectedRent: 0,
			}, {
				type: actionTypes.CHANGE_STATE,
				payload: '',
			})
		).to.deep.eql({
			selectedState: '',
			selectedBuy: 0,
			selectedRent: 0,
			states: [{
					name: 'AL',
					buy: 53600,
					rent: 670
				},
				{
					name: 'AP',
					buy: 48000,
					rent: 600
				}
			],
		});
	});
});
