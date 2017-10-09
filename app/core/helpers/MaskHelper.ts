import * as numeral from 'numeral';
import 'numeral/locales';

numeral.locale('pt-br');

/**
 * Currency mask, adds zeros when it returns an interger
 * @param currencyNumber 
 */
export const currency = (currencyNumber: string) => {
  let newNumber = String(currencyNumber).replace('.', ',');
  const maskedNumber = numeral(newNumber).format('$ 0,0[.]00');
  return (maskedNumber.search(',') !== -1) ? maskedNumber : `${maskedNumber},00`;
};
/**
 * Percentage mask
 * @param percentageNumber 
 */
export const percentage = (percentageNumber: string) => {
  let newNumber = percentageNumber.replace('.', ',');
  return `${newNumber}%`;
};
/**
 * Age mask
 * @param ageNumber 
 */
export const age = (ageNumber: number) => {
  if (ageNumber < 2) {
    return `${ageNumber} ano`;
  }
  return `${ageNumber} anos`;
};