
export const UPDATE_RENT_VALUE = "UPDATE_RENT_VALUE"

export function updateRentValue(value) {
  return {
    type: UPDATE_RENT_VALUE,
    value: value,
  }
}
