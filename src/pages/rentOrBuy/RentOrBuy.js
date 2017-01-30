
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
import Interest from './utils/interest.js'

class RentOrBuy extends React.Component {

  render() {
    const rent = Interest.calcRentTotal(3000, 10)
    const buy = Interest.calcBuyTotal(100000, 10, 11.5)

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
