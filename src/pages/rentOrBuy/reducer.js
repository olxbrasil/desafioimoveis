
import {
  UPDATE_RENT_VALUE,
  UPDATE_PRICE_VALUE,
} from './actions'

const initialState = {}

const RentOrBuyReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_RENT_VALUE:
      return {
        ...state,
        rentValue: action.value,
      }

    case UPDATE_PRICE_VALUE:
      return {
        ...state,
        priceValue: action.value,
      }

    default:
      return state
  }
}

export default RentOrBuyReducer
