import configureMockStore from 'redux-mock-store';

import * as houseActions from './houseActions';
import actionTypes from '../actionTypes';

const mockStore = configureMockStore();

describe('houseActions', () => {
	it('Should have return CHANGE_VALUE', () => {
		const expectedActions = [{
			type: actionTypes.CHANGE_VALUE,
			payload: {
				key: 'livePerYear',
				value: 10,
			},
		}];
		const store = mockStore({
			livePerYear: 0,
		});
		store.dispatch(houseActions.changeValue('livePerYear', 10));
		store.getActions().should.have.to.eql(expectedActions);
	});
	it('Should have return CALCULATE', () => {
		const expectedActions = [{
			type: actionTypes.CALCULATE,
			payload: 10912,
		}];
		const store = mockStore({
			payload: 0,
		});
		store.dispatch(houseActions.calculate(1028184, 19, 118));
		store.getActions().should.have.to.eql(expectedActions);
	});
});
