import { combineReducers } from 'redux';

const getDefaults = (min, step, max, value) => {
  return { min, max, step, value };
};

function rent(state = getDefaults(100, 100, 10000, 3000), action) {
  switch (action.type) {
    case 'UPDATE_RENT':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function buy(state = getDefaults(10000, 10000, 2000000, 100000), action) {
  switch (action.type) {
    case 'UPDATE_BUY':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function livingTime(state = getDefaults(1, 1, 30, 10), action) {
  switch (action.type) {
    case 'UPDATE_LIVINGTIME':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function annualTax(state = getDefaults(0.5, 0.1, 25, 11.5), action) {
  switch (action.type) {
    case 'UPDATE_ANNUALTAX':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function states(state = { selected: '', list: {}, isFetching: false }, action) {
  switch (action.type) {
    case 'SELECT_STATE':
      return Object.assign({}, state, { selected: action.state });
    case 'REQUEST_STATES':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_STATES':
      return Object.assign({}, state, { list: action.list, isFetching: false });
    default:
      return state;
  }
}

const rootReducer = combineReducers({ rent, buy, livingTime, annualTax, states });

export default rootReducer;
