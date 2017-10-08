interface ILoan {
  installments: Array<{installment: number}>,
  sum: number,
}

export default ILoan;