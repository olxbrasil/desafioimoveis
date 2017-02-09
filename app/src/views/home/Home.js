// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import houseActions from '../../container/actions/houseActions';
import stateActions from '../../container/actions/stateActions';
import InputRange from '../../components/InputRange';
import SelectCustom from '../../components/SelectCustom';
import Chart from '../../components/Chart';

import './Home.scss';

type Props = {
	buy: number,
	rent: number,
	livePerYear: number,
	taxForYear: number,
	installment: number,
	houseActions: {
		changeValue: (key: string, value: number) => void,
		calculate: (buy: number, year: number, tax: number) => void,
	},
	stateActions: {
		fetchStates: () => void,
		changeState: () => void,
	},
	states: [],
	selectedBuy: number,
	selectedRent: number,
	selectedState: string,
};

class Home extends Component {

	static fetchData = ({ store }) => store.dispatch(stateActions.fetchStates());

	componentWillMount() {
		if (this.props.states.length) this.props.stateActions.fetchStates();
	}

	componentWillReceiveProps(nextProps: Props) {
		if (this.props.selectedState !== nextProps.selectedState) {
			this.props.houseActions.changeValue('buy', parseFloat(nextProps.selectedBuy));
			this.props.houseActions.changeValue('rent', parseFloat(nextProps.selectedRent));
		}

		if (nextProps.rent === 0) {
			this.props.houseActions.changeValue('rent', parseFloat(nextProps.selectedRent));
		}

		this.props.houseActions.calculate(
			nextProps.buy === 0 ? nextProps.selectedBuy : nextProps.buy,
			nextProps.livePerYear,
			nextProps.taxForYear
		);
	}

	props: Props;

	handleOnChangeRange = (value: string | number, name: string) => {
		this.props.houseActions.changeValue(name, parseFloat(value));
	}

	handleOnChangeSelect = ({ value }) => {
		this.props.stateActions.changeState(value);
	}

	renderSelect = () => {
		const { states, selectedState } = this.props;
		const options = states.map(state => ({ label: state.name, value: state.name }));

		return (
			<SelectCustom
				options={options}
				onChange={this.handleOnChangeSelect}
				clearable={false}
				value={selectedState}
			/>
		);
	};

	render() {
		const { props } = this;
		return (
			<section className="wrapper">
				<h1 className="home__titel">Comprar ou Alugar ?</h1>
				{this.renderSelect()}
				<fieldset className="home__wrapper-ranger" >
					<InputRange name="rent" min="100" max="100000" formatNumber="0,0[.]00" defaultValue={props.selectedRent} label="Valor Alugado Por Mês." prefix="R$ " onChange={this.handleOnChangeRange} />
					<InputRange name="buy" min="100000" max="2000000" formatNumber="0,0[.]00" defaultValue={props.selectedBuy} label="Valor do para Compra." prefix="R$ " onChange={this.handleOnChangeRange} />
					<InputRange name="livePerYear" min="1" max="30" defaultValue={props.livePerYear} label="Quanto tempo você irar morar?" sufix=" ano(s)" onChange={this.handleOnChangeRange} />
					<InputRange name="taxForYear" min="5" max="250" formatNumber="0cp" defaultValue={props.taxForYear} label="Taxa de Juros Anual." onChange={this.handleOnChangeRange} />
				</fieldset>
				<div className="home__wrapper-chart">
					<Chart rent={props.rent} installment={props.installment} />
				</div>
			</section>
		);
	}
}

function mapStateToProps(state) {
	return { ...state.houseReducer, ...state.stateReducer };
}

function mapDispatchToProps(dispatch) {
	return {
		houseActions: bindActionCreators(houseActions, dispatch),
		stateActions: bindActionCreators(stateActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
