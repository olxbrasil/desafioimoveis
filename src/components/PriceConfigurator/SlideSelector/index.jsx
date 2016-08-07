import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';

class SlideSelector extends Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event, value) => {
    this.props.updatePrice(value, this.props.type);
  }

  getTitle = () => (<p>{this.props.label} {this.props.maskedValue}</p>)

  render() {
    const sliderStyle = { marginTop: 12, marginBottom: 24 };
    const { min, max, step, value } = this.props;
    return (
      <div className="value-input-block">
        {this.getTitle()}
        <Slider
          sliderStyle={sliderStyle}
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={this.onChange}
        />
      </div>
    );
  }
};

SlideSelector.propTypes = {
  label: PropTypes.string.isRequired,
  maskedValue: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  updatePrice: PropTypes.func.isRequired
}

export default SlideSelector;
