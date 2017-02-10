import actionTypeses from '../actionTypes';
import houseReducer from './houseReducer';

describe('houseReducer', () => {
	it('should return the initial state', () => {
		expect(
			houseReducer(undefined, {
				type: 'NOT_TYPE',
			})
		).to.eql({
			buy: 0,
			installment: 0,
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
			installment: 0,
			rent: 0,
			livePerYear: 10,
			taxForYear: 115,
		});
	});

	it('should handle CALCULATE', () => {
		expect(
			houseReducer(undefined, {
				type: actionTypeses.CALCULATE,
				payload: 40,
			})
		).to.eql({
			buy: 0,
			installment: 40,
			rent: 0,
			livePerYear: 10,
			taxForYear: 115,
		});
	});
});
