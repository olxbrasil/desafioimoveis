import IAction from '../../../core/interfaces/IAction';

const initialState = {
  states: {},
};

export default (state: Object, action: IAction) => {
  switch (action.type) {
    case 'FETCH_STATES':
      return {
        ...state,
        states: action.payload,
      };
    default: 
      return initialState;
  }
};