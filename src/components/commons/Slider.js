import React from 'react'
import PropTypes from 'prop-types'
import RCSlider from 'rc-slider'
import 'rc-slider/assets/index.css'

const Slider = ({ min, max, defaultValue, step, setValue }) => {
  const SliderWithTooltip = RCSlider.createSliderWithTooltip(RCSlider)
  return (
    <SliderWithTooltip
      tipProps={{
        placement: 'bottom',
        visible: true,
        defaultVisible: true,
      }}
      tipFormatter={tipValue => `R$ ${tipValue}`}
      min={min}
      max={max}
      defaultValue={defaultValue}
      step={step}
      trackStyle={{
        backgroundColor: '#bbc5ca',
      }}
      handleStyle={[{
        border: 'solid 2px #57c5f7',
      }]}
      onAfterChange={changedValue => setValue(changedValue)}
    />
  )
}

Slider.propTypes = {
  setValue: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
}

Slider.defaultProps = {
  min: 0,
  max: null,
  defaultValue: 0,
  step: 1,
}

export default Slider
