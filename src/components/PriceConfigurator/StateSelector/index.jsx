import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const propTypes = {
  selectState: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  selected: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
};

const StateSelector = ({ list, selected, isFetching, selectState }) => {
  const handleChange = (event, index, value) => {
    selectState(value);
  };

  return (
    <SelectField
      id="state-select"
      disabled={isFetching}
      maxHeight={200}
      style={{ width: '100%', marginBottom: 24 }}
      value={selected}
      onChange={handleChange}
      floatingLabelText="Selecione o seu estado"
    >
      {list.map(i => <MenuItem key={i} value={i} primaryText={i} />)}
    </SelectField>
  );
};

StateSelector.propTypes = propTypes;

export default StateSelector;
