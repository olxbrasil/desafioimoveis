
export const UPDATE_RENT_VALUE = "UPDATE_RENT_VALUE"
export const UPDATE_PRICE_VALUE = "UPDATE_PRICE_VALUE"

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
