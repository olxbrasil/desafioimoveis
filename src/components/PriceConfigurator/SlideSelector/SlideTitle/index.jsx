import React, { PropTypes } from 'react';
import FormatNumber from 'components/FormatNumber';

const propTypes = {
  options: PropTypes.shape({
    description: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    prefix: PropTypes.string,
    sufix: PropTypes.string,
  }).isRequired,
};

const SlideTitle = ({ options }) => (
  <p>
    {options.description}
    <FormatNumber
      prefix={options.prefix}
      sufix={options.sufix}
      number={options.value}
    />
  </p>
);

SlideTitle.propTypes = propTypes;

export default SlideTitle;
