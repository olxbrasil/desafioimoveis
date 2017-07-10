import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setInterstFee as setInterstFeeAction } from 'actions'

import SectionWrapper from './commons/SectionWrapper'
import Slider from './commons/Slider'

const InterestInput = ({ fee, setInterstFee }) => (
  <SectionWrapper>
    <div className="tc">
      <span className="f4 mt2">Taxa de juros anual:</span>
      <span className="f4 ml2-ns db di-ns">{`% ${fee}`}</span>
    </div>
    <div className="mt3 mh4 mh0-ns">
      <Slider
        min={0.5}
        max={25}
        defaultValue={fee}
        step={0.5}
        setValue={setInterstFee}
        tipFormatter={tipValue => `% ${tipValue}`}
      />
    </div>
  </SectionWrapper>
)

InterestInput.propTypes = {
  setInterstFee: PropTypes.func.isRequired,
  fee: PropTypes.number.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setInterstFee: value => dispatch(setInterstFeeAction(value)),
})

const mapStateToProps = state => ({
  fee: state.interest,
})

export default connect(mapStateToProps, mapDispatchToProps)(InterestInput)
