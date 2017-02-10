// @flow
export function getMonthlyTaxByAnnualTax(tax: number): number {
	const a = Math.pow((1 + (tax / 100)), 1 / 12);
	const monthlyTax = a - 1;
	return monthlyTax;
}

export function getInstallment(total: number, tax: number, months: number) {
	const a = parseFloat(Math.pow(1 + tax, -months).toFixed(4));
	const b = parseFloat(((1 - a) / tax).toFixed(4));

	const inst = total / b;
	return Number(inst.toFixed());
}
