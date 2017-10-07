import StateService from '../services/StateService';

import IResponseStateList from '../interfaces/IResponseStateList';

class StateController {

    service: StateService;

    constructor() {
        this.service = new StateService();
    }

    getStateList() {
        return this.service.getList()
            .then((resp: IResponseStateList) => resp.data)
            .catch(error => { throw new Error(); });
    }

}

export default StateController;