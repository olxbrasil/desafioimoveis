import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import maskConfig from '../../config/masks';
import Range from './Range';

const renderer = new ShallowRenderer();

const rangeProps = {
  label: 'test',
  min: '100',
  max: '2000',
  labelMask: 'age',
  step: '1',
  name: 'testRange'
}

let value = '300';

const onChange = () => {
  value = '200';
}

test('Range render', () => {
  renderer.render(<Range {...rangeProps} onChange={onChange} value={value} />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper.props.children).toEqual([
    <label>{rangeProps.label} {maskConfig[rangeProps.labelMask](300)}</label>,
    <span className="range__label">({rangeProps.min})</span>,
    <input
      className="range"
      type="range"
      min={rangeProps.min}
      max={rangeProps.max}
      name={rangeProps.name}
      step={rangeProps.step}
      value={value}
      onChange={onChange}
    />,
    <span className="range__label">({rangeProps.max})</span>,
  ])
})

test('Range change event', () => {
  renderer.render(<Range {...rangeProps} onChange={onChange} value={value} />);
  const wrapper = renderer.getRenderOutput();
  wrapper.props.children[2].props.onChange();
  expect(value).toBe('200');
})
