import * as React from 'react';

import { currency } from '../../../core/helpers/MaskHelper';
import './tooltip.scss';

type Props = {
  label?: string,
  payload?: Array<{ value: number }>
  name: string,
};
/**
 * Renders a custom tooltip
 * @param props 
 */
const ToolTip = (props: Props) => (
  <div className="tooltip">
    <h3 className="tooltip__title">{props.label}</h3>
    <p className="tooltip__text">{props.name}: {
      (props.payload && props.payload.length > 0 ) ? currency(String(props.payload[0].value)) : ''
      }</p>
  </div>
);

export default ToolTip;