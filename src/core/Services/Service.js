import axios from 'axios';

class Service {
	constructor() {
		return axios.get('http://localhost:4000/')
			.then(resp => resp.data)
			.then(resp => resp)
			.catch(err => err.response);
	}
}

export default Service;
