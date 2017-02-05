// @flow
import axios from 'axios';

export default class StatesService {
	static getStates(): Promise < Object > {
		return axios.get('/api/states')
			.then(res => res.data);
	}
}
