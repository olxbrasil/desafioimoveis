import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setYears as setYearsAction } from 'actions'

import SectionWrapper from './commons/SectionWrapper'
import Slider from './commons/Slider'

const TimeInput = ({ years, setYears }) => (
  <SectionWrapper>
    <div className="tc">
      <span className="f4 mt2">Quanto tempo você ira morar?</span>
      <span className="f4 ml2-ns db di-ns">{`${years} ${years === 1 ? 'ano' : 'anos'}`}</span>
    </div>
    <div className="mt3 mh4 mh0-ns">
      <Slider
        min={1}
        max={30}
        defaultValue={years}
        setValue={setYears}
      />
    </div>
  </SectionWrapper>
)

TimeInput.propTypes = {
  setYears: PropTypes.func.isRequired,
  years: PropTypes.number.isRequired,
}

const mapDispatchToProps = dispatch => ({
  setYears: years => dispatch(setYearsAction(years)),
})

const mapStateToProps = state => ({
  years: state.years,
})

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput)
