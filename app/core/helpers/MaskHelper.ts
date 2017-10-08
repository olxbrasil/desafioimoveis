import * as numeral from 'numeral';
import 'numeral/locales';

numeral.locale('pt-br');

export const currency = (number:string) => {
  let newNumber = String(number).replace('.', ',');
  const maskedNumber = numeral(newNumber).format('$ 0,0[.]00');
  return (maskedNumber.search(',') != -1) ? maskedNumber : `${maskedNumber},00`
}

export const percentage = (number:string) => `${number}%`;

export const age = (number:number) => {
  if (number < 2) {
    return `${number} ano`;
  }
  return `${number} anos`;
}