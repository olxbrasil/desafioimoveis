import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import Bar from './Bar';

const renderer = new ShallowRenderer();

test('Bar data', () => {
  renderer.render(<Bar purchase={200}  rental={200} />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper.props.children.props.data).toEqual([
    {
      money: 200,
      name: 'Comprar',
    },
    {
      money: 200,
      name: 'Alugar',
    },
  ]);
})

