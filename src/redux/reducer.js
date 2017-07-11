import * as t from './actionTypes'

export default function (state, { type, payload }) {
  switch (type) {
    case t.SET_STATE:
      return {
        ...state,
        state: payload.state,
        buy: state.states[payload.state].compra,
        rent: state.states[payload.state].aluguel,
      }
    case t.SET_RENT_VALUE:
      return {
        ...state,
        rent: payload.value,
      }
    case t.SET_BUY_VALUE:
      return {
        ...state,
        buy: payload.value,
      }
    case t.SET_YEARS_LIVING:
      return {
        ...state,
        years: payload.years,
      }
    case t.SET_ANNUAL_INTEREST:
      return {
        ...state,
        interest: payload.fee,
      }
    case t.SET_FETCH_ERROR:
      return {
        ...state,
        error: payload.error,
      }
    case t.FETCH_STATES:
      return {
        ...state,
        loading: true,
      }
    case t.STATES_RECEIVED:
      return {
        ...state,
        states: payload.states,
        loading: false,
      }
    default:
      return state
  }
}
