import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class StateSelector extends Component {
  handleChange = (event, index, value) => {
    this.props.selectState(value);
  }

  render() {
    const { list, selected, isFetching } = this.props;

    const items = []
    for (let i = 0; i < list.length; i++) {
      const value = list[i];
      items.push(<MenuItem key={i} value={value} primaryText={value} />)
    }

    return (
      <SelectField
        id="state-select"
        disabled={isFetching}
        maxHeight={200}
        style={{width: '100%', marginBottom: 24}}
        value={selected}
        onChange={this.handleChange}
        floatingLabelText="Selecione o seu estado">
      {items}
      </SelectField>
    )
  }
}

StateSelector.propTypes = {
  selectState: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  selected: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
}

export default StateSelector;
