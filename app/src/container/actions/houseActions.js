// @flow
import {
	createActions,
} from 'redux-actions';

import {
	getMonthlyTaxByAnnualTax,
	getInstallment,
} from '../../helpers/Math';
import actionTypes from '../actionTypes';

const actions = createActions({
	[actionTypes.CHANGE_VALUE]: (key: string, value: number) => ({
		key,
		value,
	}),
	[actionTypes.CALCULATE]: (buy: number, year: number, tax: number) => {
		const newTax = getMonthlyTaxByAnnualTax(tax / 10);
		const totalBuy = getInstallment(buy, newTax, year * 12);
		console.log(buy, year * 12, tax / 10);
		return totalBuy;
	},
});

export default {
	...actions,
};
