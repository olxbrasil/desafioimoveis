import { Loan } from 'loanjs';

import ILoan from '../interfaces/ILoan';

/**
 * Calculates installments by years and returns sum
 * @param loan 
 */
export const calculateInstallmentsByYears = (loan: ILoan) => {
  const total: ILoan = {
    installments: [],
    sum: loan.sum,
  };
  let sum = 0;
  loan.installments.forEach((loanInstallment, index) => {
    sum += loanInstallment.installment;
    if (index % 12 === 0) {
      total.installments.push({
        installment: sum,
      });
    }
  });
  return total;
};
/**
 * Calculates Rent by Month and return a sum
 * @param capital 
 * @param installments 
 */
export const CalculateRentByMonth = (capital: string, installments: string) => {
  const total: ILoan = {
    installments: [],
    sum: 0,
  };
  const monthInstallments = Number(installments) * 12;
  for (let i = 0; i < monthInstallments; i++) {
    total.installments.push({
      installment: Number(capital)
    });
    total.sum += Number(capital);
  }
  return calculateInstallmentsByYears(total);
};
/**
 * Calculates a purchase by month using LoanJs
 * @param capital 
 * @param installments 
 * @param tax 
 */
export const CalculatePurchaseByMonth = (capital: string, installments: string, tax: string) => {
  const totalCalculated = new Loan(capital, Number(installments) * 12 , tax, true);
  return calculateInstallmentsByYears(totalCalculated);
};
