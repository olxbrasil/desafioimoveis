import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';

class SlideSelector extends Component {
  getTitle = () => (<p>{this.props.label} {this.props.maskedValue}</p>)
  render() {
    return (
      <div className="value-input-block">
        {this.getTitle()}
        <Slider
          sliderStyle={{marginTop: 12, marginBottom: 24}}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          defaultValue={this.props.value}
        />
      </div>
    );
  }
};

SlideSelector.propTypes = {
  label: PropTypes.string.isRequired,
  maskedValue: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.oneOfType([
    PropTypes.number, PropTypes.object
  ]),
  step: PropTypes.number.isRequired,
  value: PropTypes.number,
}

export default SlideSelector;
