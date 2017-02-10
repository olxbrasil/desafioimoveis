import numeral from 'numeral';
import 'numeral/locales';

numeral.register('format', 'percentageCustom', {
	regexps: {
		format: /(cp)/,
		unformat: /(cp)/,
	},
	format: value => `${(value / 10).toString()}%`,
});

numeral.locale('pt-br');

export default numeral;
