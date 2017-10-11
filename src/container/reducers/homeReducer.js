// @flow
const State = {
	title: 'Comprar ou Alugar ?',
	states: {
		AC: {
			aluguel: 770,
			compra: 61600
		},
	},
	uf: [],
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'CHANGE_TITLE':
			return { ...state, title: action.title };
		case 'REQUEST_DATA_FULLFILED':
			return { ...state, states: action.payload };
		case 'REQUEST_DATA_UF_FULLFILED':
			return { ...state, uf: action.payload };
		default:
			return state;
	}
}
