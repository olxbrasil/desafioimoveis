/**
 *
 * @param {Number} number Number to be formatted
 * @param {Number} cents Cents to display
 * @param {String} thousandDivisor Defines separator of the thousands piece
 * @param {String} centsDivisor Defines separator of the cents piece
 * @returns {string}
 */
export default function formatToMoney(number, cents = 0, thousandDivisor = '.', centsDivisor = ',') {
  const positiveOrNegative = number < 0 ? '-' : '';
  const numberWithoutCents = parseInt(Math.abs(Number(number) || 0).toFixed(cents), 10);
  const stringWithoutCents = String(numberWithoutCents);

  const centsRemain = stringWithoutCents.length > 3 ? stringWithoutCents.length % 3 : 0;
  const numberFirstPiece = stringWithoutCents.substr(0, centsRemain);
  const numberFirstPieceWithDivisor = centsRemain ? numberFirstPiece + thousandDivisor : '';
  const numberMiddlePiece = stringWithoutCents.substr(centsRemain);

  const numberClean = numberMiddlePiece.replace(/(\d{3})(?=\d)/g, `$1${thousandDivisor}`);
  const centsFormatted = (Math.abs(number) - stringWithoutCents).toFixed(cents).slice(2);
  const centsWithDivisor = cents ? centsDivisor + centsFormatted : '';
  return positiveOrNegative + numberFirstPieceWithDivisor + numberClean + centsWithDivisor;
}
