import * as React from 'react';
import * as ShallowRenderer from 'react-test-renderer/shallow';

import { currency } from '../../../core/helpers/MaskHelper';
import ToolTip from './ToolTip';

const renderer = new ShallowRenderer();

test('ToolTip', () => {
  const name = 'Imovel';
  renderer.render(<ToolTip name={name} payload={[{value: 20000}]} label="Compra" />);
  const wrapper = renderer.getRenderOutput();
  expect(wrapper.props.children[0]).toEqual(<h3 className="tooltip__title">Compra</h3>);
  expect(wrapper.props.children[1]).toEqual(
    <p className="tooltip__text">{name}: {currency('20000')}</p>
  );
})
