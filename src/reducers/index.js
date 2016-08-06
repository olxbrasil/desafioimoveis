import { combineReducers } from 'redux';

const getDefaults = (min, step, max = null, value = null) => {
  return { min, max, step, value }
};

console.log(getDefaults(100, 100));

function rent (state = getDefaults(100, 100), action) {
  switch (action.type) {
    case 'UPDATE_RENT':
      return ({}, state, action.data);
    default:
      return state;
  }
}

function buy (state = getDefaults(10000, 1000), action) {
  switch (action.type) {
    case 'UPDATE_BUY':
      return ({}, state, action.data);
    default:
      return state;
  }
}

function livingTime (state = getDefaults(1, 1, 30, 10), action) {
  switch (action.type) {
    case 'UPDATE_LIVING_TIME':
      return ({}, state, action.data);
    default:
      return state;
  }
}

function annualTax (state = getDefaults(0.5, 0.1, 25, 11.5), action) {
  switch (action.type) {
    case 'UPDATE_ANNUAL_TAX':
      return ({}, state, action.data);
    default:
      return state;
  }
}

const rootReducer = combineReducers({ rent, buy, livingTime, annualTax })

export default rootReducer;
