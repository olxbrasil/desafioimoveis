import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import Graphs from './Graphs';

const setup = (propValues) => {
  const props = {
    rangeValues: {
      rentPerMonth: 1,
      propertyToBuy: 1,
      timeInProperty: 1,
      interestTaxPerYear: 1,
    }
  };

  return mount(<Graphs {...props} />);
};

describe('UserForm', () => {
  it('Should have the correct title', () => {
    const wrapper = setup();
    expect(wrapper.find('.graphs-title').text()).toEqual('Custo total')
  });

  it('Should have two bar graphs', () => {
    const wrapper = setup();
    expect(wrapper.find('.single-graph-container').length).toEqual(2)
  });

  it('Should have two bar graphs, with correct titles each', () => {
    const wrapper = setup();
    expect(wrapper.find('.single-graph-container').length).toEqual(2);
    expect(wrapper.find('.single-graph-container').first().find('.graph-info-label').text()).toEqual('Alugar');
    expect(wrapper.find('.single-graph-container').last().find('.graph-info-label').text()).toEqual('Comprar');
  });

  it('Should have two bar graphs, with correct titles each', () => {
    const wrapper = setup();
    expect(wrapper.find('.single-graph-container').length).toEqual(2);
  });
});
