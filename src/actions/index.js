export function updatePrice (value, type) {
  const formattedType = `UPDATE_${type.toUpperCase()}`;
  return {
    value,
    type: formattedType
  }
}
