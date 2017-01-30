
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import fetch from '../../core/fetch';
import history from '../../core/history';
import interest from 'interestjs'

class RentOrBuy extends React.Component {

  calcEquivMonthlyInterest(annualInterest) {
    // Math.pow hack to get Nth root :P
    const annualPercentage = 1 + (annualInterest / 100)
    const monthly = Math.pow(annualPercentage, 1 / 12) - 1
    return monthly * 100
  }

  calcBuyTotal(totalPrice, years, annualInterest) {
    const months = years * 12
    const monthlyInterest = this.calcEquivMonthlyInterest(annualInterest)
    const installmentBase = totalPrice / months
    const int = interest(installmentBase, months, monthlyInterest)
    return int.sum;
  }

  calcRentTotal(monthlyPay, years) {
    const months = years * 12
    return monthlyPay * months
  }

  render() {
    const rent = this.calcRentTotal(3000, 10)
    const buy = this.calcBuyTotal(100000, 10, 11.5)

    return(
      <div>
        <p>Rent: {rent}</p>
        <p>Buy: {buy}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

RentOrBuy.propTypes = {
  data: PropTypes.object.isRequired,
}

RentOrBuy.contextTypes = {
  store: PropTypes.object,
}

export default connect(mapStateToProps)(RentOrBuy);
