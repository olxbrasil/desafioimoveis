import interest from 'interestjs'

class Interest {
  static calcEquivMonthlyInterest(annualInterest) {
    if(!!annualInterest === false) throw new Error('annualInterest should be passed as an argument')

    // Math.pow hack to get Nth root :P
    const annualPercentage = 1 + (annualInterest / 100)
    const monthly = Math.pow(annualPercentage, 1 / 12) - 1
    return parseFloat(monthly.toFixed(6)) * 100
  }

  static calcBuyTotal(totalPrice, years, annualInterest) {
    if(!!totalPrice === false) throw new Error('totalPrice should be passed as an argument')
    if(!!years === false) throw new Error('years should be passed as an argument')
    if(!!annualInterest === false) throw new Error('annualInterest should be passed as parameter')

    const months = years * 12
    const monthlyInterest = Interest.calcEquivMonthlyInterest(annualInterest)
    const installmentBase = totalPrice / months
    const int = interest(installmentBase, months, monthlyInterest)
    return int.sum;
  }

  static calcRentTotal(monthlyPay, years) {
    if(!!monthlyPay === false) throw new Error('monthlyPay must be passed as an argument')
    if(!!years === false) throw new Error('years must be passed as an argument')

    const months = years * 12
    return monthlyPay * months
  }
}

export default Interest
