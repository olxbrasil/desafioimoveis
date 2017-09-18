import React from 'react';
import { mount } from 'enzyme';
import expect from 'expect';
import AppHero from './AppHero';

const setup = (propValues) => {
  const props = {};

  return mount(<AppHero {...props} />);
};

describe('UserForm', () => {
  it('Should have an h2 title', () => {
    const wrapper = setup();
    expect(wrapper.find('h2').length).toEqual(1);
  });
});
