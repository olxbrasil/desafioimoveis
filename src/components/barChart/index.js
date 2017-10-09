import React from 'react';
import { css } from 'glamor';

import './barchart.css';

const alguelHeight = (props) => css({ height: `${Math.sqrt(props.data[0])/25}%` });
const compraHeight = (props) => css({ height: `${Math.sqrt(props.data[1])/25}%` });

const toBRL = number => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);

const BarChart = (props) => (
	<div className="barchart">
		<h3 className="barchart__title">Custo Total</h3>
		<div className={`barchart__bar ${alguelHeight(props)}`}>Aluguel {toBRL(props.data[0])}</div>
		<div className={`barchart__bar ${compraHeight(props)}`}>Compra {toBRL(props.data[1])}</div>
	</div>
);

export default BarChart;
