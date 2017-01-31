import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './RegionSelector.css';
import _ from 'underscore'

class RegionSelector extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    onChange: PropTypes.fn,
    region: PropTypes.string.isRequired,
  };

  render() {
    const {
      data,
      onChange,
      region,
    } = this.props

    const list = _.map(data, (value, key) => {
      return {
        state: key,
        ...value,
      }
    })

    return (
      <div>
        <p className={s.label}>Selecione seu estado: </p>
        <select onChange={onChange} value={region}>
          {list.map((key, index) => (
            <option value={key.state} key={index}>{key.state}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default withStyles(s)(RegionSelector);
