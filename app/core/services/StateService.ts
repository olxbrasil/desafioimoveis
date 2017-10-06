import axios from 'axios';

import IResponseStateList from '../interfaces/IResponseStateList';

class StateService {

    url: string;

    constructor() {
        this.url = 'http://localhost:3000/api/state';
    }

    getList() {
        return axios.get(`${this.url}/list`).then(
            (resp: IResponseStateList) => resp
        );
    }
}

export default StateService;