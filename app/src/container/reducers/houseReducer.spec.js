import actionTypeses from '../actionTypes';
import houseReducer from './houseReducer';

describe('houseReducer', () => {
	it('should return the initial state', () => {
		expect(
			houseReducer(undefined, {
				payload: {
					key: 'buy',
					value: 0,
				},
			})
		).to.eql({
			buy: 0,
			rent: 0,
			livePerYear: 10,
			taxForYear: 115,
		});
	});

	it('should handle CHANGE_VALUE', () => {
		expect(
			houseReducer(undefined, {
				type: actionTypeses.CHANGE_VALUE,
				payload: {
					key: 'buy',
					value: 100,
				},
			})
		).to.eql({
			buy: 100,
			rent: 0,
			livePerYear: 10,
			taxForYear: 115,
		});
	});
});
