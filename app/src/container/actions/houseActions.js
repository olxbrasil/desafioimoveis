// @flow
import {
	createActions,
} from 'redux-actions';

import {
	getMonthlyTaxByAnnualTax,
	getInstallment,
} from '../../helpers/Math';
import actionTypes from '../actionTypes';

const changeValue = createActions({
	[actionTypes.CHANGE_VALUE]: (key: string, value: number) => ({
		key,
		value,
	}),
	[actionTypes.CALCULATE]: () => {

	},
});

export default {
	changeValue,
};
