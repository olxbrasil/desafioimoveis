import React from 'react'
import PropTypes from 'prop-types'
import RCSlider from 'rc-slider/lib/Slider'

import 'rc-slider/assets/index.css'

const trackStyle = {
  height: '8px',
  backgroundColor: '#19a974',
}

const railStyle = {
  height: '8px',
  backgroundColor: 'rgba(0, 0, 0, .15)',
}

const handleStyle = [
  {
    width: '26px',
    height: '26px',
    marginTop: '-9px',
    borderColor: '#19a974',
  },
]

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default function Slider ({min, max, step, value, onChange}) {
  return (
    <div className="pl2">
      <RCSlider
        trackStyle={trackStyle}
        railStyle={railStyle}
        handleStyle={handleStyle}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
