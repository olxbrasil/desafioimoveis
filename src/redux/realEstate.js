import data from '../../api/valores.json'

const UPDATE_CITY = 'desafioimoveis/realEstate/UPDATE_CITY'
const UPDATE_RENT_PRICE = 'desafioimoveis/realEstate/UPDATE_RENT_PRICE'
const UPDATE_BUY_PRICE = 'desafioimoveis/realEstate/UPDATE_BUY_PRICE'
const UPDATE_TAX_PERCENT = 'desafioimoveis/realEstate/UPDATE_TAX_PERCENT'
const UPDATE_YEARS_WILL_PAY = 'desafioimoveis/realEstate/UPDATE_YEARS_WILL_PAY'

const initialState = {
  city: 'RJ',
  cities: Object.keys(data),
  rentPrice: data.RJ.aluguel,
  buyPrice: data.RJ.compra,
  taxPercent: 11.5,
  yearsWillPay: 10,
}

export default function reducer (state = initialState, {type, payload}) {
  switch (type) {
    case UPDATE_CITY:
      return {
        ...state,
        city: payload,
        rentPrice: data[payload].aluguel,
        buyPrice: data[payload].compra,
      }
    case UPDATE_RENT_PRICE:
      return {...state, rentPrice: payload}
    case UPDATE_BUY_PRICE:
      return {...state, buyPrice: payload}
    case UPDATE_TAX_PERCENT:
      return {...state, taxPercent: payload}
    case UPDATE_YEARS_WILL_PAY:
      return {...state, yearsWillPay: payload}
    default:
      return state
  }
}

export function updateCity (city) {
  return {type: UPDATE_CITY, payload: city}
}

export function updateRentPrice (rentPrice) {
  return {type: UPDATE_RENT_PRICE, payload: rentPrice}
}

export function updateBuyPrice (buyPrice) {
  return {type: UPDATE_BUY_PRICE, payload: buyPrice}
}

export function updateTaxPercent (taxPercent) {
  return {type: UPDATE_TAX_PERCENT, payload: taxPercent}
}

export function updateYearsWillPay (yearsWillPay) {
  return {type: UPDATE_YEARS_WILL_PAY, payload: yearsWillPay}
}
