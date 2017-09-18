import React from 'react';
import SingleGraph from './SingleGraph';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import './SingleGraph.scss'

function setup(propValues) {
  const props = {
    label: propValues.label
  };

  return shallow(<SingleGraph {...props} />);
}

// describe('SingleGraph', () => {
//   it('Should render correct label for graph', () => {
//     const wrapper = setup({ label: 'Alugar' });
//     console.log('LENGTHHHH: ', wrapper.find('.single-graph-container').length);
//     // expect(wrapper.find('.single-graph-container').text()).toEqual('Alugar');
//   });
// });
