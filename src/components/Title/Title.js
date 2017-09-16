import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const Title = props => (
  <h2 styleName={`title ${props.extraClasses}`}>{props.text}</h2>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
  extraClasses: PropTypes.string,
};

export default Title;
