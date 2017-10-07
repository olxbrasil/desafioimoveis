import IAction from '../../../core/interfaces/IAction';

export default (state: { list: Object }, action: IAction) => {
  switch (action.type) {
    case 'FETCH_STATES':
      return {
        ...state,
        list: action.payload,
      };
    default:
      return { 
        ...state,
        list: (state) ? state.list : {},
      };
  }
};