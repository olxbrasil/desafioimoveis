// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import houseActions from '../../container/actions/houseActions';
import InputRange from '../../components/InputRange';

type Props = {
	buy: string,
	rent: string,
	livePerYear: string,
	taxForYear: string,
	houseActions: {
		changeValue:() => void,
	},
};

class Home extends Component {
	handleOnChange: (value: string | number, name: string) => void;
	props: Props;

	handleOnChange = (value: string | number, name: string) => {
		this.props.houseActions.changeValue(name, parseFloat(value));
	}

	render() {
		const { props } = this;
		return (
			<div>
				<InputRange name="buy" min="100" max="100000" defaultValue={props.rent} label="Valor Alugado Por Mês" onChange={this.handleOnChange} />
				<InputRange name="rent" min="10" max="20" defaultValue={props.buy} label="Valor do para Compra" onChange={this.handleOnChange} />
				<InputRange name="livePerYear" min="1" max="30" defaultValue={props.livePerYear} label="Quanto tempo você irar morrar" onChange={this.handleOnChange} />
				<InputRange name="taxForYear" min="10" max="20" defaultValue={props.taxForYear} label="taxa de Juros Anual" onChange={this.handleOnChange} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state.houseReducer;
}

function mapDispatchToProps(dispatch) {
	return {
		houseActions: bindActionCreators(houseActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
