
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

class RentOrBuy extends React.Component {

  render() {
    return(
      <h1>Teste</h1>
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
