import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const stateShape = {
  state: PropTypes.string.isRequired,
  rent: PropTypes.number.isRequired,
  buy: PropTypes.number.isRequired,
};

const propTypes = {
  selectState: PropTypes.func.isRequired,
  list: PropTypes.arrayOf(PropTypes.shape(stateShape)).isRequired,
  selected: PropTypes.number.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const StateSelector = ({ list, selected, isFetching, selectState }) => {
  const handleChange = (event, index) => {
    selectState(index, list[index]);
  };

  return (
    <SelectField
      id="state-select"
      disabled={isFetching}
      autoWidth
      fullWidth
      maxHeight={200}
      value={selected}
      onChange={handleChange}
      floatingLabelText="Selecione o seu estado"
      floatingLabelStyle={{ fontSize: '20px' }}
      underlineStyle={{ borderColor: 'rgba(0, 0, 0, .2)' }}
      iconStyle={{ fill: 'rgba(0, 0, 0, .2)' }}
      style={{ marginBottom: 24 }}
    >
      {list.map((s, i) => <MenuItem key={i} value={i} primaryText={s.state} />)}
    </SelectField>
  );
};

StateSelector.propTypes = propTypes;

export default StateSelector;
