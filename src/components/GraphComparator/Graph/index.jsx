import React, { PropTypes } from 'react';
import FormatNumber from 'components/FormatNumber';
import classNames from 'classnames';
import './style.scss';

const propTypes = {
  value: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  best: PropTypes.bool.isRequired,
};

const Graph = ({ value, height, title, best }) => {
  let classes = classNames({
    'price-block': true,
    'price-block__better': best,
    'price-block__worst': !best,
  });

  return (
    <div className="price-bar">
      <div className={classes} style={{ height: `${height}%` }}>
        <p className="price-bar-title">{title}</p>
        <FormatNumber prefix={'R$'} number={value} />
      </div>
    </div>
  );
};

Graph.propTypes = propTypes;

export default Graph;
