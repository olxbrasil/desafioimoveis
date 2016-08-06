import { combineReducers } from 'redux';

const getDefaults = (min, step, max = null, value = null) => {
  return { min, max, step, value }
};

function rent (state = getDefaults(100, 100, 10000, 3000), action) {
  switch (action.type) {
    case 'UPDATE_RENT':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function buy (state = getDefaults(10000, 10000, 2000000, 100000), action) {
  switch (action.type) {
    case 'UPDATE_BUY':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function livingTime (state = getDefaults(1, 1, 30, 10), action) {
  switch (action.type) {
    case 'UPDATE_LIVINGTIME':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

function annualTax (state = getDefaults(0.5, 0.1, 25, 11.5), action) {
  switch (action.type) {
    case 'UPDATE_ANNUALTAX':
      return Object.assign({}, state, { value: action.value });
    default:
      return state;
  }
}

const rootReducer = combineReducers({ rent, buy, livingTime, annualTax })

export default rootReducer;
