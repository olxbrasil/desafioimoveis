import React from 'react';
import PropTypes from 'prop-types';
import formatToMoney from '../../helpers/formatMoney';
import './SingleGraph.scss'

export const extraClasses = {
  toRent: 'graph-to-rent',
  toBuy: 'graph-to-buy',
};

const SingleGraph = props => (
  <div
    styleName={`single-graph-container ${props.extraClasses} ${props.height === 100 ? '' : 'graph-losing'}`}
    style={{ height: `${props.height}%` }}
  >
    <div styleName="graph-info">
      <div styleName="graph-info-label">{props.label}</div>
      <div styleName="graph-info-value">
        <span styleName="graph-info-value-prefix">{props.prefix}</span>
        {formatToMoney(props.value)}</div>
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
