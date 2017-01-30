import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Slider.css';

class Slider extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        SLIDER
      </div>
    );
  }
}

export default withStyles(s)(Slider);
