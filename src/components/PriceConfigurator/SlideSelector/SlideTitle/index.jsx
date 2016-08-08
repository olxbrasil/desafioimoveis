import React, { PropTypes } from 'react';
import FormatNumber from 'components/FormatNumber';

const SlideTitle = ({options}) => {
  return (
    <p>
      {options.description}
      <FormatNumber
        prefix={options.prefix}
        sufix={options.sufix}
        number={options.value} />
    </p>

  );
};

const configShape = {
  description: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  sufix: PropTypes.string
}

SlideTitle.propTypes = {
  options: PropTypes.shape(configShape).isRequired
}

export default SlideTitle;
