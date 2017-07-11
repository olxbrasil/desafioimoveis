import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setRentValue as setRentValueAction } from 'actions'
import numeral from 'numeral'

import SectionWrapper from './commons/SectionWrapper'
import Slider from './commons/Slider'

const RentInput = ({ value, setRentValue }) => (
  <SectionWrapper>
    <div className="tc">
      <span className="f4 mt2 fw6">Valor do aluguel por mês:</span>
      <span className="f4 ml2-ns db di-ns">{`R$ ${numeral(value).format('0,0')}`}</span>
    </div>
    <div className="mt3 mh4 mh0-ns">
      <Slider
        min={100}
        max={10000}
        defaultValue={value}
        step={10}
        setValue={setRentValue}
      />
    </div>
  </SectionWrapper>
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
