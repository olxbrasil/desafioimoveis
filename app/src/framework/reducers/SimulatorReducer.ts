import IAction from '../../../core/interfaces/IAction';

const setInitialState = (state: Object) => 
  (state) ? state : {
    selectedState: '',
    purchase: 10000,
    rental: 100,
    time: 1,
    tax: 0.5,
  };

export default (state: Object, action: IAction) => {
  switch (action.type) {
    case 'SET_TAX':
      return {
        ...state,
        tax: action.payload,
      };
    case 'STATE_CHANGE':
      return {
        ...state,
        selectedState: action.payload.selectedState,
        purchase: action.payload.purchase,
        rental: action.payload.rental,
      };
    default: 
      return {
        ...setInitialState(state),
      };
  }
};