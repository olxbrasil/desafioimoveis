import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import numeral from 'numeral'
import Chart from './Chart'

const BuyInput = ({ rent, buy, years, interest }) => (
  <div className="mt5 flex-row items-center">
    <div>
      <span className="f4 mt2">Custo Total</span>
    </div>
    <div className="mt3">
      <Chart />
    </div>
  </div>
)

BuyInput.propTypes = {
  rent: PropTypes.number.isRequired,
  buy: PropTypes.number.isRequired,
  years: PropTypes.number.isRequired,
  interest: PropTypes.number.isRequired,
}

const mapStateToProps = ({ rent, buy, years, interest }) => ({ rent, buy, years, interest })

export default connect(mapStateToProps)(BuyInput)
