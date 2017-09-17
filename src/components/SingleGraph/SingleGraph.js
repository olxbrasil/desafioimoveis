import React from 'react';
import PropTypes from 'prop-types';
import './SingleGraph.scss'

export const extraClasses = {
  toRent: 'graph-to-rent',
  toBuy: 'graph-to-buy',
};

const SingleGraph = props => (
  <div
    styleName={`single-graph-container ${props.extraClasses}`}
    style={{ height: `${props.height}%` }}
  >
    <div styleName="graph-info">
      <div styleName="graph-info-label">{props.label}</div>
      <div styleName="graph-info-value">{props.prefix}{props.value}</div>
    </div>
  </div>
);

SingleGraph.defaultProps = {
  height: 0,
};

SingleGraph.propTypes = {
  prefix: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.number,
  extraClasses: PropTypes.string,
  height: PropTypes.number,
};

export default SingleGraph;
