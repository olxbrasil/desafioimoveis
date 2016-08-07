import React, { PropTypes } from 'react';

const FormatNumber = ({number, prefix = '', sufix = ''}) => {
  const formatedNumber = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (<span>{prefix} {formatedNumber} {sufix}</span>)
};

FormatNumber.propTypes = {
  number: PropTypes.number.isRequired,
  prefix: PropTypes.string,
  sufix: PropTypes.string,
}

export default FormatNumber;
