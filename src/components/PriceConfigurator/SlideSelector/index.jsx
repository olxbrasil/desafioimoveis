import React, { PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import SlideTitle from './SlideTitle';

const SlideSelector = ({range, label, updatePrice, type}) => {
  const onChange = (event, value) => updatePrice(value, type);

  const { description, prefix, sufix } = label;
  const { value } = range;

  return (
    <div className="value-input-block">
      <SlideTitle options={{ description, prefix, sufix, value }} />
      <Slider
        sliderStyle={{ marginTop: 12, marginBottom: 24 }}
        min={range.min}
        max={range.max}
        step={range.step}
        value={range.value}
        onChange={onChange}
      />
    </div>
  );
};

const configRangeShape = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

const configLabelShape = {
  description: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  sufix: PropTypes.string
}

SlideSelector.propTypes = {
  label: PropTypes.shape(configLabelShape).isRequired,
  range: PropTypes.shape(configRangeShape).isRequired,
  updatePrice: PropTypes.func.isRequired
}

export default SlideSelector;
