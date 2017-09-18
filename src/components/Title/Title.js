import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

export const extraClasses = {
  white: 'white-title',
  big: 'big-title',
  extraBold: 'extra-bold-title',
  shadow: 'shadow-title'
};

const Title = props => (
  <h2 styleName={`title ${props.extraClasses}`}>{props.text}</h2>
);

Title.propTypes = {
  text: PropTypes.any.isRequired,
  extraClasses: PropTypes.string,
};

export default Title;
