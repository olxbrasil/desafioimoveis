import StateController from '../../../core/controllers/StateController';

export const getStateList = async(dispatch: (param: ({})) => void) => {
    try {
        const stateController = new StateController();
        const data = await stateController.getStateList();
        dispatch(fetchStates(data));
    } catch (error) {
        throw new Error(error);
    }
};

export const fetchStates = (states: Object) => ({ type: 'FETCH_STATES',  payload: states});