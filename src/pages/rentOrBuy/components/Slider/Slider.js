import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Slider.css';

class Slider extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    max: PropTypes.number.isRequired,
    min: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.fn,
  };

  render() {
    const {
      label,
      value,
      max,
      min,
      step,
      onChange,
    } = this.props

    return (
      <div>
        <div>
          <p>{label} {value} </p>
          <input type="range" max={max} min={min} step={step} onInput={onChange}/>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Slider);
