import { createStore } from 'redux'
import reducer from './reducer'

const initialState = {
  state: '',
  rent: 3000,
  buy: 100000,
  years: 10,
  interest: 11.5,
}

export default function () {
  // eslint-disable-next-line
  return createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
}
