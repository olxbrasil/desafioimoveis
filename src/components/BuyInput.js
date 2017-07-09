import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setBuyValue as setBuyValueAction } from 'actions'
import numeral from 'numeral'

import Slider from './commons/Slider'

const BuyInput = ({ value, setBuyValue }) => (
  <div className="mt5 flex-row items-center">
    <div>
      <span className="f4 mt2">Valor de compra do imóvel:</span>
      <span className="f4 ml3">{`R$ ${numeral(value).format('0,0')}`}</span>
    </div>
    <div className="mt3">
      <Slider
        min={10000}
        max={2000000}
        defaultValue={value}
        step={100}
        setValue={setBuyValue}
      />
    </div>
  </div>
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
