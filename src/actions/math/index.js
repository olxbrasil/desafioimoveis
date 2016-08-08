export function getMonthlyTaxByAnnualTax(annualTax) {
  const a = Math.pow((1 + (annualTax / 100)), 1 / 12);
  const monthlyTax = a - 1;
  return monthlyTax;
}

export function getInstallment(total, tax, months) {
  const a = Math.pow(1 + tax, -months).toFixed(4);
  const b = ((1 - a) / tax).toFixed(4);

  const inst = total / b;
  return Number(inst.toFixed());
}
