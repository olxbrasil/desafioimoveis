import * as React from 'react';

import './range.scss';
import maskConfig from '../../config/masks';

type Props = {
  label: string,
  min: string,
  max: string,
  labelMask: string,
  step: string,
  value: string,
  name: string,
  onChange: (event: Object) => void,
};
/**
 * Renders an input range
 * @param props 
 */
const Range = (props: Props) => (
  <div className="field-area">
    <label>{props.label} {maskConfig[props.labelMask](props.value)}</label>
    <span className="range__label">({props.min})</span>
    <input
      className="range"
      type="range"
      min={props.min}
      max={props.max}
      name={props.name}
      step={props.step}
      value={props.value}
      onChange={props.onChange}
    />
    <span className="range__label">({props.max})</span>
  </div>
);

export default Range;
