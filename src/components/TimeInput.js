import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setYears as setYearsAction } from 'actions'

import Slider from './commons/Slider'

const TimeInput = ({ years, setYears }) => (
  <div className="mt5 flex-row items-center">
    <div>
      <span className="f4 mt2">Quanto tempo você ira morar?</span>
      <span className="f4 ml3">{`${years} ${years === 1 ? 'ano' : 'anos'}`}</span>
    </div>
    <div className="mt3">
      <Slider
        min={1}
        max={30}
        defaultValue={years}
        setValue={setYears}
      />
    </div>
  </div>
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
