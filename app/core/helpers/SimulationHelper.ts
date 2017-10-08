import { Loan } from 'loanjs';

export const CalculateRentByMonth = (capital: string, instalments: string) => {
  const total = Number(capital) * (Number(instalments) * 12);
  return total;
};

export const CalculatePurchaseByMonth = (capital: string, instalments: string, tax: string) => {
  const totalCalculated = new Loan(capital, Number(instalments) * 12 , tax, true);
  return totalCalculated;
};
