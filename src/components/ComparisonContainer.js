import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import interestJs from 'interestjs'

import SectionWrapper from './commons/SectionWrapper'
import Chart from './Chart'

const BuyInput = ({ rent, buy, years, interest }) => {
  const annualRentValue = 12 * rent
  const { sum: rentTotal } = interestJs(annualRentValue, years, interest)
  return (
    <SectionWrapper noBorder>
      <div className="tc">
        <span className="f4 mt2 fw6">Custo Total</span>
      </div>
      <div className="mt3 flex justify-between mh5">
        <span>Aluguel</span>
        <span>Compra</span>
      </div>
      <div className="mb3">
        <Chart
          rent={rentTotal}
          buy={buy}
        />
      </div>
    </SectionWrapper>
  )
}

BuyInput.propTypes = {
  rent: PropTypes.number.isRequired,
  buy: PropTypes.number.isRequired,
  years: PropTypes.number.isRequired,
  interest: PropTypes.number.isRequired,
}

const mapStateToProps = ({ rent, buy, years, interest }) => ({ rent, buy, years, interest })

export default connect(mapStateToProps)(BuyInput)
