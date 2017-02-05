// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import houseActions from '../../container/actions/houseActions';
import stateActions from '../../container/actions/stateActions';
import InputRange from '../../components/InputRange';

type Props = {
	buy: number,
	rent: number,
	livePerYear: number,
	taxForYear: number,
	houseActions: {
		changeValue: () => void,
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
		this.props.stateActions.fetchStates();
	}

	componentWillReceiveProps(nextProps: Props) {
		if (this.props.selectedState !== nextProps.selectedState) {
			this.props.houseActions.changeValue('buy', parseFloat(nextProps.selectedBuy));
			this.props.houseActions.changeValue('rent', parseFloat(nextProps.selectedRent));
		}
	}

	props: Props;

	handleOnChange = (value: string | number, name: string) => {
		this.props.houseActions.changeValue(name, parseFloat(value));
	}

	handleOnChangeSelect = (event: Object) => {
		this.props.stateActions.changeState(event.target.value);
	}

	renderSelect = () => {
		const { states } = this.props;
		if (states.length) {
			return (
				<div className="form-group">
					<label className="form-grour__label" htmlFor="state">Selecione seu Estado</label>
					<select onChange={this.handleOnChangeSelect}>
						<option key="" value="">Selecione..</option>
						{states.map(state => <option key={state.name} value={state.name}>{state.name}</option>)}
					</select>
				</div>
			);
		}
		return '';
	};

	render() {
		const { props } = this;
		return (
			<section className="wrapper">
				<fieldset>
					<legend>Comprar ou Alugar ?</legend>
					{this.renderSelect()}
					<InputRange name="rent" min="100" max="100000" formatNumber="0,0[.]00" defaultValue={props.selectedRent} label="Valor Alugado Por Mês: R$ " onChange={this.handleOnChange} />
					<InputRange name="buy" min="100000" max="2000000" formatNumber="0,0[.]00" defaultValue={props.selectedBuy} label="Valor do para Compra: R$ " onChange={this.handleOnChange} />
					<InputRange name="livePerYear" min="1" max="30" defaultValue={props.livePerYear} label={{ before: 'Quanto tempo você irar morar', after: 'ano(s)' }} onChange={this.handleOnChange} />
					<InputRange name="taxForYear" min="5" max="250" formatNumber="0cp" defaultValue={props.taxForYear} label="taxa de Juros Anual" onChange={this.handleOnChange} />
				</fieldset>
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
