
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
import Interest from './utils/interest'
import Slider from './components/Slider'

import {
  updateRentValue,
  updatePriceValue,
  updateLivingTime,
  updateInterestRate,
} from './actions'

class RentOrBuy extends React.Component {
  constructor(props) {
    super(props)

    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  handleSliderChange(action) {
    return function(event) {
      const value = event.target.value
      this.context.store.dispatch(action(value))
    }.bind(this)
  }

  render() {
    const {
      rentValue,
      priceValue,
      livingTime,
      interestRate
    } = this.props

    const rent = Interest.calcRentTotal(rentValue, livingTime)
    const buy = Interest.calcBuyTotal(priceValue, livingTime, interestRate)

    return(
      <div>
        <h1>Comprar ou alugar?</h1>
        <Slider
          label="Valor do aluguel por mês:"
          min={100}
          max={10000}
          step={100}
          value={rentValue}
          onChange={this.handleSliderChange(updateRentValue)}
        />
        <Slider
          label="Valor do imóvel para comprar:"
          min={1000}
          max={2000000}
          step={500}
          value={priceValue}
          onChange={this.handleSliderChange(updatePriceValue)}
        />
        <Slider
          label="Quanto tempo você irá morar?"
          min={1}
          max={30}
          step={1}
          value={livingTime}
          onChange={this.handleSliderChange(updateLivingTime)}
        />
        <Slider
          label="Taxa de juros anual:"
          min={0.5}
          max={25.00}
          step={0.5}
          value={interestRate}
          onChange={this.handleSliderChange(updateInterestRate)}
        />
        <p>Rent: {rent}</p>
        <p>Buy: {buy}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  rentValue: state.rentOrBuy.rentValue,
  priceValue: state.rentOrBuy.priceValue,
  livingTime: state.rentOrBuy.livingTime,
  interestRate: state.rentOrBuy.interestRate,
});

RentOrBuy.propTypes = {
  data: PropTypes.object.isRequired,
}

RentOrBuy.contextTypes = {
  store: PropTypes.object,
}

export default connect(mapStateToProps)(RentOrBuy);
