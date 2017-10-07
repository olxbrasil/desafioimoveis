import axios from 'axios';

class Service {
	constructor() {
		axios.get('http://localhost:4000/')
			.then(resp => resp.data)
			.catch(err => err.response);
	}
}

export default Service;
