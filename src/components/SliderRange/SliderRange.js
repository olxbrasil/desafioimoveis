import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import formatToMoney from '../../helpers/formatMoney';
import './SliderRange.scss';

const SliderRange = props => (
  <div styleName="slider-container">
    <div styleName="slider-header">
      <p styleName="slider-label">{props.label}</p>
      <p styleName="slider-value">
        <span styleName="value-prefix">{props.prefix}</span>
        {props.hasDecimal ? formatToMoney(props.value, 1, ',') : formatToMoney(props.value)}
        <span styleName="value-sufix">{props.sufix}</span>
      </p>
    </div>
    <div styleName="slider-ui-container">
      <Slider
        onChange={(value) => props.onChange(props.stateReference, value)}
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        defaultValue={props.defaultValue}
      />
    </div>
  </div>
);

SliderRange.defaultProps = {
  prefix: '',
  sufix: '',
  hasDecimal: false,
};

SliderRange.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
  stateReference: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  hasDecimal: PropTypes.bool,
  onChange: PropTypes.func,
};

export default SliderRange;
