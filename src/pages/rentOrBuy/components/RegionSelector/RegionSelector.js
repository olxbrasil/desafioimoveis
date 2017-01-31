import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RegionSelector.css';

class RegionSelector extends React.Component {
  static propTypes = {
  };

  render() {
    const {
    } = this.props

    return (
      <div>
        <p className={s.label}>Selecione seu estado: </p>
        <select>
          <option value="RJ">RJ</option>
          <option value="SP">SP</option>
        </select>
      </div>
    );
  }
}

export default withStyles(s)(RegionSelector);
