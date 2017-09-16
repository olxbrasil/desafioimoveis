import React from 'react';
import PropTypes from 'prop-types';

const Title = props => (
  <h2 className={`title ${props.extraClasses}`}>{props.text}</h2>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
};

export default Title;
