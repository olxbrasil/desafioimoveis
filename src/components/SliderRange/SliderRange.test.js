import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import SliderRange from './SliderRange';

const setup = (propValues) => {
  const props = {
    label: propValues.label || '',
    prefix: propValues.prefix,
    sufix: propValues.sufix,
    value: propValues.value || 0,
    max: propValues.max || 0,
    min: propValues.min || 0,
    hasDecimal: propValues.hasDecimal,
  };

  return mount(<SliderRange {...props} />);
};

describe('UserForm', () => {
  it('Should display the correct label', () => {
    const wrapper = setup({
      label: 'teste'
    });
    expect(wrapper.find('.slider-label').text()).toEqual('teste');
  });

  it('Should display the correct label', () => {
    const wrapper = setup({
      prefix: 'R$',
      sufix: 'anos',
    });
    expect(wrapper.find('.value-prefix').text()).toEqual('R$');
    expect(wrapper.find('.value-sufix').text()).toEqual('anos');
  });

  it('Should display fomatted value', () => {
    const wrapper = setup({
      value: 1000000,
    });
    expect(wrapper.find('.slider-value').text()).toEqual('1.000.000');
  });

  it('Should fomat interest with comma separator', () => {
    const wrapper = setup({
      hasDecimal: true,
      value: 11.5,
    });
    expect(wrapper.find('.slider-value').text()).toEqual('11,5');
  });
});
