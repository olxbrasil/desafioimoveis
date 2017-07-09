import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

const initialState = {
  state: '',
  rent: 3000,
  buy: 100000,
  years: 10,
  interest: 11.5,
  states: {},
  loading: false,
}

export default function () {
  // eslint-disable-next-line
  const composeEnhancers = (typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

  return createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware)))
}
