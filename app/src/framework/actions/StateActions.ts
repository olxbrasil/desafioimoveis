import StateController from '../../../core/controllers/StateController';

/**
 * Saves state list
 * @param states 
 */
export const fetchStates = (states: Object) => ({ type: 'FETCH_STATES',  payload: states});

/**
 * Calls state api and dispatches fetchState action to save states
 * @param dispatch 
 */
export const getStateList = async(dispatch: (param: ({})) => void) => {
    try {
        const stateController = new StateController();
        const data = await stateController.getStateList();
        dispatch(fetchStates(data));
    } catch (error) {
        throw new Error(error);
    }
};
