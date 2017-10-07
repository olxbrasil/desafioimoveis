// @flow
const State = {
	title: 'Comprar ou Alugar ?',
	states: [{
		"id": 0,
		"state": "BR",
		"information": {
		  "rent": 0,
		  "purchase": 0
		}
	}],
};

export default function (state: Object = State, action: Object) {
	switch (action.type) {
		case 'CHANGE_TITLE':
			return { ...state, title: action.title };
		case 'REQUEST_DATA_FULLFILED':
			return { ...state, states: action.payload };
		default:
			return state;
	}
}
