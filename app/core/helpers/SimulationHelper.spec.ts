import {CalculatePurchaseByMonth, CalculateRentByMonth, calculateInstallmentsByYears} from './SimulationHelper';
import { Loan } from 'loanjs';

test('CalculatePurchaseByMonth', () => {
  const result = CalculatePurchaseByMonth('1000', '10', '2.5');
  const loan = Loan(1000, 120, 2.5, true);
  expect(result).toEqual(calculateInstallmentsByYears(loan));
});

test('CalculateRentByMonth', () => {
  const result = CalculateRentByMonth('1000', '10');
  expect(result.sum).toEqual(120000);
});