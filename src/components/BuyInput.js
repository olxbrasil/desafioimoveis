import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setBuyValue as setBuyValueAction } from 'actions'
import numeral from 'numeral'

import SectionWrapper from './commons/SectionWrapper'
import Slider from './commons/Slider'

const BuyInput = ({ value, setBuyValue }) => (
  <SectionWrapper>
    <div className="tc">
      <span className="f4 mt2 fw6">Valor de compra de compra:</span>
      <span className="f4 ml1-ns db di-l">{`R$ ${numeral(value).format('0,0')}`}</span>
    </div>
    <div className="mt3 mh4 mh0-ns">
      <Slider
        min={10000}
        max={2000000}
        defaultValue={value}
        step={100}
        setValue={setBuyValue}
      />
    </div>
  </SectionWrapper>
)

BuyInput.propTypes = {
  setBuyValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setBuyValue: value => dispatch(setBuyValueAction(value)),
})

const mapStateToProps = state => ({
  value: state.buy,
})

export default connect(mapStateToProps, mapDispatchToProps)(BuyInput)
