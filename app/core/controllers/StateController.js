import StateService from '../services/StatesService';
import State from '../models/State';

export default class StateController {
	static getStates() {
		return StateService.getStates()
			.then(data => Object.keys(data).map((key) => {
				const {
					aluguel,
					compra,
				} = data[key];
				return new State(key, compra, aluguel);
			}));
	}
}
