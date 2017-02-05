import numeral from 'numeral';

numeral.register('format', 'percentageCustom', {
	regexps: {
		format: /(cp)/,
		unformat: /(cp)/,
	},
	format: value => `${(value / 10).toString()}%`,
});

export default numeral;
