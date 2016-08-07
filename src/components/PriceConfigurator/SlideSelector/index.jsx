import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import FormatNumber from 'components/FormatNumber';

class SlideSelector extends Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange = (event, value) => {
    this.props.updatePrice(value, this.props.type);
  }

  getTitle = (options) => (<p>{options.label} <FormatNumber prefix={options.prefix} sufix={options.sufix} number={options.value} /></p>)

  render() {
    const sliderStyle = { marginTop: 12, marginBottom: 24 };
    const { min, max, step, value, label, prefix, sufix } = this.props;
    return (
      <div className="value-input-block">
        {this.getTitle({label, value, prefix, sufix})}
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
  prefix: PropTypes.string,
  sufix: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  updatePrice: PropTypes.func.isRequired
}

export default SlideSelector;
