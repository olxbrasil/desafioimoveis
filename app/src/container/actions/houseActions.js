// @flow
import {
	createActions,
} from 'redux-actions';

import {
	getMonthlyTaxByAnnualTax,
	getInstallment,
} from '../../../core/helpers/Math';
import actionTypes from '../actionTypes';

export const {
	changeValue,
	calculate,
} = createActions({
	[actionTypes.CHANGE_VALUE]: (key: string, value: number) => ({
		key,
		value,
	}),
	[actionTypes.CALCULATE]: (buy: number, year: number, tax: number) => {
		const newTax = getMonthlyTaxByAnnualTax(tax / 10);
		const installment = getInstallment(buy, newTax, year * 12);
		return installment;
	},
});
