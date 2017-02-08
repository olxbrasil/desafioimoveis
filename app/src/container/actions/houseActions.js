// @flow
import {
	createActions,
} from 'redux-actions';

import {
	getMonthlyTaxByAnnualTax,
	getInstallment,
} from '../../../core/helpers/Math';
import actionTypes from '../actionTypes';

const actions = createActions({
	[actionTypes.CHANGE_VALUE]: (key: string, value: number) => ({
		key,
		value,
	}),
	[actionTypes.CALCULATE]: (buy: number, year: number, tax: number) => {
		const newTax = getMonthlyTaxByAnnualTax(tax / 10);
		const totalBuy = getInstallment(buy, newTax, year * 12);
		return totalBuy;
	},
});

export default {
	...actions,
};
