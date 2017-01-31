import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Bar.css';

class Bar extends React.Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
  };

  render() {

    const {
      height,
      label,
      value,
      barClass,
    } = this.props

    return (
      <div className={barClass} style={{ height: height + '%'}}>
        <span>{label}</span>R${value.toFixed(2).replace('.',',')}
      </div>
    );
  }
}

export default withStyles(s)(Bar);
