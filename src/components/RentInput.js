import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setRentValue as setRentValueAction } from 'actions'

import Slider from './commons/Slider'

const RentInput = ({ value, setRentValue }) => (
  <div className="mt5 flex-row items-center">
    <div>
      <span className="f4 mt2">Valor do aluguel por mês:</span>
      <span className="f4 ml3">{`R$ ${value}`}</span>
    </div>
    <div className="mt3">
      <Slider
        min={100}
        max={10000}
        defaultValue={value}
        step={10}
        setValue={setRentValue}
      />
    </div>
  </div>
)

RentInput.propTypes = {
  setRentValue: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setRentValue: value => dispatch(setRentValueAction(value)),
})

const mapStateToProps = state => ({
  value: state.rent,
})

export default connect(mapStateToProps, mapDispatchToProps)(RentInput)
