import React from 'react';
import { shallow, mount } from 'enzyme';
import expect from 'expect';
import Title from './Title';

const setup = (propValues) => {
  const props = {
    text: propValues.text,
  };

  return shallow(<Title {...props} />);
};

describe('Title.js', () => {
  it('Should display correct text', () => {
    const wrapper = setup({ text: 'TESTEEEEE' });
    expect(wrapper.find('h2').text()).toEqual('TESTEEEEE');
  });
});
