
import { UPDATE_RENT_VALUE } from './actions'

const initialState = {}

const RentOrBuyReducer = (state = initialState, action) => {
  switch(action.type) {
    case UPDATE_RENT_VALUE:
      return {
        ...initialState,
        rentValue: action.value
      }

    default:
      return state
  }
}

export default RentOrBuyReducer
