
export const UPDATE_RENT_VALUE = "UPDATE_RENT_VALUE"
export const UPDATE_PRICE_VALUE = "UPDATE_PRICE_VALUE"
export const UPDATE_LIVING_TIME = "UPDATE_LIVING_TIME"
export const UPDATE_INTEREST_RATE = "UPDATE_INTEREST_RATE"
export const SELECT_REGION = "SELECT_REGION"

export function updateRentValue(value) {
  return {
    type: UPDATE_RENT_VALUE,
    value: value,
  }
}

export function updatePriceValue(value) {
  return {
    type: UPDATE_PRICE_VALUE,
    value: value,
  }
}

export function updateLivingTime(value) {
  return {
    type: UPDATE_LIVING_TIME,
    value: value,
  }
}

export function updateInterestRate(value) {
  return {
    type: UPDATE_INTEREST_RATE,
    value: value,
  }
}

export function selectRegion(value) {
  return {
    type: SELECT_REGION,
    value: value,
  }
}
