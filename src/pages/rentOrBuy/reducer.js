
import {
  UPDATE_RENT_VALUE,
  UPDATE_PRICE_VALUE,
  UPDATE_LIVING_TIME,
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

    case UPDATE_LIVING_TIME:
      return {
        ...state,
        livingTime: action.value,
      }

    default:
      return state
  }
}

export default RentOrBuyReducer
