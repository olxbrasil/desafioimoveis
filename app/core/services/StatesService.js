// @flow
import axios from 'axios';

export default class StatesService {
	static getStates(): Promise < Object > {
		return axios.get('http://localhost:3333/api/states')
			.then(res => res.data);
	}
}
