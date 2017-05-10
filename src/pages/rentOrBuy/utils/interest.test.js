
import Interest from './interest'
import { expect } from 'chai'

describe('RentOrBuy page', () => {
  describe('#calcRentTotal', () => {
    it('should throw an error if monthlyPay was not passed as parameter', () => {
      expect(Interest.calcRentTotal).to.throw('monthlyPay')
    })

    it('should throw an error if years was not passed as parameter', () => {
      expect(Interest.calcRentTotal.bind(null, 3000, null)).to.throw('years')
    })

    it('should return the total of monthlyPay multiplied by months in year', () => {
      const monthly = 3000
      const years = 10
      const total = 120 * 3000
      expect(Interest.calcRentTotal(monthly, years)).to.eq(total)
    })
  })

  describe('#calcEquivMonthlyInterest', () => {
    it('should throw an error if annualInterest is not passed as parameter', () => {
      expect(Interest.calcEquivMonthlyInterest).to.throw('annualInterest')
    })

    it('should equivalent monthly interest based on annual interest', () => {
      const annual = 11.5
      const monthly = Interest.calcEquivMonthlyInterest(annual)
      const round = parseFloat(monthly.toFixed(3))
      expect(round).to.eq(0.911)
    })
  })

  describe('#calcBuyTotal', () => {
    it('should throw an error if totalPrice was not passed as parameter', () => {
      expect(Interest.calcBuyTotal).to.throw('totalPrice')
    })

    it('should throw an error if years was not passed as parameter', () => {
      expect(Interest.calcBuyTotal.bind(null, 1000)).to.throw('years')
    })

    it('should throw an error if annualInterest was not passed as parameter', () => {
      expect(Interest.calcBuyTotal.bind(null, 1000, 10)).to.throw('annualInterest')
    })

    it('should return the total price over the years plus the interest', () => {
      const totalPrice = 100000
      const years = 10
      const annualInterest = 11.5
      expect(Interest.calcBuyTotal(totalPrice, years, annualInterest)).to.eq(104735.11)
      
    })
  })
})
