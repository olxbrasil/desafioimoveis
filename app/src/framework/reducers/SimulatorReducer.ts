import IAction from '../../../core/interfaces/IAction';

const setInitialState = (state: Object) => 
  (state) ? state : {
    selectedState: 'RJ',
    purchase: '200000',
    rental: '1200',
    time: '10',
    tax: '11.5',
  };

export default (state: Object, action: IAction) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return {
        ...state,
        [action.payload.name]: action.payload.value,
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