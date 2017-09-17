import React from 'react';
import PropTypes from 'prop-types';
import SliderRange from './../SliderRange/SliderRange';
import brazilStates from '../../api/states.json';
import Select from 'react-select';
import './UserForm.scss';

const UserForm = props => (
  <div styleName="select-state-container">
    <Select
      name="form-field-state"
      value={props.selectedState.value}
      clearable={false}
      placeholder="Selecione seu estado"
      options={brazilStates}
      onChange={props.onSelectChange}
    />
    <SliderRange
      label="Valor do aluguel por mês:"
      value={props.rangeValues.rentPerMonth}
      min={100}
      max={10000}
      stateReference="rentPerMonth"
      onChange={props.onSliderChange}
      prefix="R$"
      defaultValue={3000}
    />
    <SliderRange
      label="Valor do imóvel para comprar:"
      value={props.rangeValues.propertyToBuy}
      min={10000}
      max={2000000}
      stateReference="propertyToBuy"
      onChange={props.onSliderChange}
      prefix="R$"
      defaultValue={100000}
    />
    <SliderRange
      label="Quanto tempo você irá morar?"
      value={props.rangeValues.timeInProperty}
      min={1}
      max={30}
      stateReference="timeInProperty"
      onChange={props.onSliderChange}
      sufix={props.rangeValues.timeInProperty === 1 ? 'ano' : 'anos'}
      defaultValue={10}
    />
    <SliderRange
      label="Taxa de juros anual(%)"
      value={props.rangeValues.interestTaxPerYear}
      min={0.5}
      max={25.00}
      stateReference="interestTaxPerYear"
      onChange={props.onSliderChange}
      sufix="%"
      hasDecimal
      step={0.5}
      defaultValue={11.5}
    />
  </div>
);

UserForm.propTypes = {
  selectedState: PropTypes.shape({
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  rangeValues: PropTypes.shape({
    rentPerMonth: PropTypes.number,
    propertyToBuy: PropTypes.number,
    timeInProperty: PropTypes.number,
    interestTaxPerYear: PropTypes.number,
  }),
  onSelectChange: PropTypes.func,
  onSliderChange: PropTypes.func,
};

export default UserForm;
