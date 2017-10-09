import * as React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

import InfoToolTip from '../ToolTip/ToolTip';
import './chartbar.scss';

type Props = {
  rental: number,
  purchase: number,
};
/**
 * Renders a bar chart using Recharts 
 * @param props 
 */
const ChartBar = (props: Props) => {
  const chartData = [
    {
      name: 'Comprar',
      money: props.rental,
    },
    {
      name: 'Alugar',
      money: props.purchase,
    }
  ];
  return (
    <div className="chart-bar">
      <BarChart data={chartData} width={600} height={300}>
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip content={(<InfoToolTip name="Total" />)} />
        <Bar dataKey="money" />
      </BarChart>
    </div>
  );
};

export default ChartBar;