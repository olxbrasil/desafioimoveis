import interest from 'interestjs'

import data from '../../api/valores.json'

const UPDATE_CITY = 'desafioimoveis/realEstate/UPDATE_CITY'
const UPDATE_RENT_PRICE = 'desafioimoveis/realEstate/UPDATE_RENT_PRICE'
const UPDATE_BUY_PRICE = 'desafioimoveis/realEstate/UPDATE_BUY_PRICE'
const UPDATE_TAX_PERCENT = 'desafioimoveis/realEstate/UPDATE_TAX_PERCENT'
const UPDATE_YEARS_WILL_PAY = 'desafioimoveis/realEstate/UPDATE_YEARS_WILL_PAY'

const YEAR_IN_MONTHS = 12

const calcTotalRentPrice = (rentPrice, yearsWillPay) =>
  Math.round(rentPrice * YEAR_IN_MONTHS * yearsWillPay)

const calcTotalBuyPrice = (buyPrice, yearsWillPay, taxPercent) => {
  const months = YEAR_IN_MONTHS * yearsWillPay
  const monthly = buyPrice / months
  return Math.round(interest(monthly, months, taxPercent).sum)
}

const calcMonthlyBuyPrice = (totalBuyPrice, yearsWillPay) =>
  Math.round(totalBuyPrice / (YEAR_IN_MONTHS * yearsWillPay))

const initialState = {
  city: 'RJ',
  cities: Object.keys(data),
  rentPrice: data.RJ.aluguel,
  buyPrice: data.RJ.compra,
  taxPercent: 11.5,
  yearsWillPay: 10,
  totalRentPrice: calcTotalRentPrice(data.RJ.aluguel, 10),
  totalBuyPrice: calcTotalBuyPrice(data.RJ.compra, 10, 11.5),
}
initialState.monthlyBuyPrice = calcMonthlyBuyPrice(initialState.totalBuyPrice, 10)

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
      const {yearsWillPay} = state
      return {
        ...state,
        rentPrice: payload,
        totalRentPrice: calcTotalRentPrice(payload, yearsWillPay),
      }
    case UPDATE_BUY_PRICE: {
      const {yearsWillPay, taxPercent} = state
      const totalBuyPrice = calcTotalBuyPrice(payload, yearsWillPay, taxPercent)
      return {
        ...state,
        buyPrice: payload,
        totalBuyPrice,
        monthlyBuyPrice: calcMonthlyBuyPrice(totalBuyPrice, yearsWillPay),
      }
    }
    case UPDATE_TAX_PERCENT: {
      const {buyPrice, yearsWillPay} = state
      const totalBuyPrice = calcTotalBuyPrice(buyPrice, yearsWillPay, payload)
      return {
        ...state,
        taxPercent: payload,
        totalBuyPrice,
        monthlyBuyPrice: calcMonthlyBuyPrice(totalBuyPrice, yearsWillPay),
      }
    }
    case UPDATE_YEARS_WILL_PAY: {
      const {rentPrice, buyPrice, taxPercent} = state
      const totalBuyPrice = calcTotalBuyPrice(buyPrice, payload, taxPercent)
      return {
        ...state,
        yearsWillPay: payload,
        totalRentPrice: calcTotalRentPrice(rentPrice, payload),
        totalBuyPrice,
        monthlyBuyPrice: calcMonthlyBuyPrice(totalBuyPrice, payload),
      }
    }
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
