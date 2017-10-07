import StateService from '../services/StateService';

import IResponseStateList from '../interfaces/IResponseStateList';

class StateController {

    service: StateService;

    constructor() {
        this.service = new StateService();
    }

    getStateList() {
        return this.service.getList()
            .then((resp: IResponseStateList) => {
                const stateList = {};
                Object.keys(resp.data).forEach(state => {
                    stateList[state] = {
                        rental: resp.data[state].aluguel,
                        purchase: resp.data[state].compra,
                    };
                });
                return stateList;
            }).catch(error => { throw new Error(); });
    }

}

export default StateController;