import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './style.scss';

const Graph = ({value, height, title, best}) => {
  let classes = classNames({
    'price-block': true,
    'price-block__better': best,
    'price-block__worst': !best
  })
  return (
    <div className="price-bar">
      <div className={classes} style={{ height: `${height}%` }}>
        <p>{title}</p>
        R$ {value}
      </div>
    </div>
  );
}

Graph.propTypes = {
  value: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  best: PropTypes.bool.isRequired
}

export default Graph;
