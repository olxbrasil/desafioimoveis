import * as numeral from 'numeral';
import 'numeral/locales';

numeral.locale('pt-br');

export const currency = (number:string) => {
  const newNumber = `${number},00`;
  return numeral(newNumber).format('$ 0,0.00');
}

export const percentage = (number:string) => `${number}%`;

export const age = (number:number) => {
  if (number < 2) return `${number} ano`;
  return `${number} anos`;
}