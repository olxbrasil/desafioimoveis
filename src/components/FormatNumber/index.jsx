import React, { PropTypes } from 'react';

const propTypes = {
  number: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
};

const FormatNumber = ({ number, prefix = '', sufix = '' }) => {
  const formatedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (<span>{prefix} {formatedNumber} {sufix}</span>);
};

FormatNumber.propTypes = propTypes;

export default FormatNumber;
