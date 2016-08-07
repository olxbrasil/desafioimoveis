import React, { Component, PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const StateSelector = ({list, selected, isFetching, selectState}) => {
  const handleChange = (event, index, value) => {
    selectState(value);
  }

  const getItems = (list) => {
    const items = [];

    for (let i = 0; i < list.length; i++) {
      const value = list[i];
      items.push(<MenuItem key={i} value={value} primaryText={value} />)
    }

    return items;
  }

  return (
    <SelectField
      id="state-select"
      disabled={isFetching}
      maxHeight={200}
      style={{width: '100%', marginBottom: 24}}
      value={selected}
      onChange={handleChange}
      floatingLabelText="Selecione o seu estado">
    {getItems(list)}
    </SelectField>
  )
}


StateSelector.propTypes = {
  selectState: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  selected: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
}

export default StateSelector;
