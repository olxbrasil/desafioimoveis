import React from 'react';
import SingleGraph from './SingleGraph';
import expect from 'expect';
import { shallow } from 'enzyme';
import './SingleGraph.scss'

function setup(propValues) {
  const props = {
    extraClasses: propValues.extraClasses,
    label: propValues.label,
    value: propValues.value,
    height: propValues.height,
    prefix: propValues.prefix,
  };

  return shallow(<SingleGraph {...props} />);
}

describe('SingleGraph.js', () => {
  it('Should render correct label for graph', () => {
    const wrapper = setup({ label: 'Alugar' });
    expect(wrapper.find('.graph-info-label').text()).toEqual('Alugar');
  });

  it('Should render formatted value for graph', () => {
    const wrapper = setup({ value: 1000000 });
    expect(wrapper.find('.graph-info-value').text()).toEqual('1.000.000');
  });

  it('Should add class "graph-losing" if height less then 100', () => {
    const wrapper = setup({ height: 99 });
    expect(wrapper.find('.single-graph-container.graph-losing').length).toEqual(1);
  });

  it('Should set correct height in percentage', () => {
    const wrapper = setup({ height: 50 });
    const heightStyle = wrapper.find('.single-graph-container').get(0).props.style.height;
    expect(heightStyle).toEqual('50%');
  });

  it('Should display the correct prefix symbol', () => {
    const wrapper = setup({ prefix: 'R$' });
    expect(wrapper.find('.graph-info-value-prefix').text()).toEqual('R$');
  });
});
