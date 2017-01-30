
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
})
