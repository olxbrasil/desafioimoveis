import axios from 'axios'
import formatStateList from 'utils/data'
import * as t from './actionTypes'

export function setState(state) {
  return {
    type: t.SET_STATE,
    payload: { state },
  }
}

function setFetchError(error) {
  return {
    type: t.SET_FETCH_ERROR,
    payload: { error },
  }
}

function requestStates() {
  return {
    type: t.FETCH_STATES,
  }
}

function statesReceived(data) {
  return {
    type: t.STATES_RECEIVED,
    payload: { states: data },
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

export function fetchStates() {
  return (dispatch) => {
    dispatch(requestStates())
    axios.get('/api/valores.json')
      .then(({ data }) => {
        dispatch(statesReceived(formatStateList(data)))
      })
      .catch(({ response, message }) => {
        if (response) {
          dispatch(setFetchError({
            status: response.status,
            message,
          }))
        } else {
          dispatch(setFetchError({
            message,
          }))
        }
      })
  }
}
