import React from 'react';
import { css } from 'glamor';

import './barchart.css';

const alguelHeight = (props) => css({ height: `${Math.sqrt(props.data[0]).toFixed(3)}px` });
const compraHeight = (props) => css({ height: `${Math.sqrt(props.data[1])}px` });

const toBRL = number => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);

const BarChart = (props) => (
	<div className="barchart">
		<div className={`barchart__bar ${alguelHeight(props)}`}>Aluguel {toBRL(props.data[0])}</div>
		<div className={`barchart__bar ${compraHeight(props)}`}>Compra {toBRL(props.data[1])}</div>
	</div>
);

export default BarChart;
