
import {
  UPDATE_RENT_VALUE,
  UPDATE_PRICE_VALUE,
  UPDATE_LIVING_TIME,
  UPDATE_INTEREST_RATE,
  SELECT_REGION,
} from './actions'

const initialState = {
  rentValue: "1390",
  priceValue: "111200",
  livingTime: "10",
  interestRate: "11.5",
  region: 'RJ',
}

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

    case UPDATE_INTEREST_RATE:
      return {
        ...state,
        interestRate: action.value,
      }

    case SELECT_REGION:
      return {
        ...state,
        region: action.value,
      }

    default:
      return state
  }
}

export default RentOrBuyReducer
