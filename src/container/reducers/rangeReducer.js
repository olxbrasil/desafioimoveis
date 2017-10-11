// @flow
const State = {
	alguelValue: 770,
	compraValue: 61600,
	anosValue: 10,
	taxaValue: 11.5,
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'ALUGUEL_VALUE_FULLFILED':
			return { ...state, alguelValue: action.payload };
		case 'COMPRA_VALUE_FULLFILED':
			return { ...state, compraValue: action.payload };
		case 'ANOS_VALUE_FULLFILED':
			return { ...state, anosValue: action.payload };
		case 'TAXA_VALUE_FULLFILED':
			return { ...state, taxaValue: action.payload };
		default:
			return state;
	}
}
