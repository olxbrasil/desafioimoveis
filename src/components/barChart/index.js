import React, { Component } from 'react';
import { css } from 'glamor';

import './barchart.css';

class BarChart extends Component {
	constructor() {
		super();
		this.state = {
			counterCompra: 0,
			couterAlguel: 0,
		}
	}

	componentWillReceiveProps() {
		this.calcHeight();
	}

	calcHeight = () => {
		const { data } = this.props;
		const min = Math.min(data[0], data[1]);
		const max = Math.max(data[0], data[1]);
		const x = min * 100;
		const result = x / max;
		if (max === data[1]) {
			this.setState({
				counterCompra: 100,
				couterAlguel: result,
			})
		} else if (max === data[0]) {
			this.setState({
				counterCompra: result,
				couterAlguel: 100,
			})
		}
	}

	alguelHeight = (props) => css({ height: `${this.state.couterAlguel}%` });
	compraHeight = (props) => css({ height: `${this.state.counterCompra}%` });

	toBRL = number => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);

	render() {
		return (
			<div className="barchart">
				<h3 className="barchart__title">Custo Total</h3>
				<div className={`barchart__bar ${this.alguelHeight(this.props)}`}>Aluguel {this.toBRL(this.props.data[0])}</div>
				<div className={`barchart__bar ${this.compraHeight(this.props)}`}>Compra {this.toBRL(this.props.data[1])}</div>
			</div>
		);
	}
}

export default BarChart;
