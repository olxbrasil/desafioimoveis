import * as t from './actionTypes'
import defaults from '../../api/valores.json'

function setStateAction(state) {
  return {
    type: t.SET_STATE,
    payload: { state },
  }
}

export function setRentValue(value) {
  return {
    type: t.SET_RENT_VALUE,
    payload: { value },
  }
}

export function setBuyValue(value) {
  return {
    type: t.SET_BUY_VALUE,
    payload: { value },
  }
}

export function setYears(years) {
  return {
    type: t.SET_YEARS_LIVING,
    payload: { years },
  }
}

export function setInterstFee(fee) {
  return {
    type: t.SET_ANNUAL_INTEREST,
    payload: { fee },
  }
}

export function setState(state) {
  return (dispatch) => {
    dispatch(setStateAction(state))
    dispatch(setBuyValue(defaults[state].compra))
    dispatch(setRentValue(defaults[state].aluguel))
  }
}
