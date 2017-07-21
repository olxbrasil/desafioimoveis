import React from 'react'
import PropTypes from 'prop-types'
import RCSlider from 'rc-slider/lib/Slider'

import Title from './Title'

import 'rc-slider/assets/index.css'

const trackStyle = {
  height: '8px',
  backgroundColor: '#19a974',
}

const railStyle = {height: '8px'}

const handleStyle = [
  {
    width: '26px',
    height: '26px',
    marginTop: '-9px',
    borderColor: '#19a974',
  },
]

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.number.isRequired,
  valueFormatter: PropTypes.func,
  onChange: PropTypes.func.isRequired,
}

Slider.defaultProps = {
  valueFormatter: value => value,
}

export default function Slider ({title, valueFormatter, ...restProps}) {
  return (
    <div className="mb5">
      <div className="dt w-100 v-mid">
        <div className="dtc">
          <Title>{title}</Title>
        </div>
        <div className="dtc tr">
          <span className="fw6 f4 black">
            {valueFormatter(restProps.value)}
          </span>
        </div>
      </div>
      <div className="pl2">
        <RCSlider
          trackStyle={trackStyle}
          railStyle={railStyle}
          handleStyle={handleStyle}
          {...restProps}
        />
      </div>
    </div>
  )
}
