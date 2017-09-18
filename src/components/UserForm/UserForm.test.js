import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import UserForm from './UserForm';

const setup = (propValues) => {
  const props = {
    selectedState: {
      id: 'RJ',
      label: 'Rio de Janeiro',
      value: 'Rio de Janeiro',
    },
    rangeValues: {
      rentPerMonth: 0,
      propertyToBuy: 0,
      timeInProperty: 0,
      interestTaxPerYear: 0,
    }
  };

  return mount(<UserForm {...props} />);
};

describe('UserForm', () => {
  it('Should have a select component rendered', () => {
    const wrapper = setup();
    expect(wrapper.find('.Select').length).toEqual(1);
  });

  it('Should have four sliders present', () => {
    const wrapper = setup();
    expect(wrapper.find('.slider-container').length).toEqual(4);
  });
});
