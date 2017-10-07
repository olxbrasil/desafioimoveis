import IAction from '../../../core/interfaces/IAction';

const initialState = {
  selectedState: '',
  total: 10000,
  time: 1,
  tax: 0.5,
};

export default (state:Object, action:IAction) => {
  switch(action.type) {
    case 'SET_TAX':
      return {
        ...state,
        tax: action.payload,
      }
    default: 
      return initialState;
  }
}