// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import houseActions from '../../container/actions/houseActions';
import InputRange from '../../components/InputRange';

type Props = {
	buy: number,
	rent: number,
	livePerYear: number,
	taxForYear: number,
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
				<InputRange name="rent" min="100" max="100000" formatNumber="0,0[.]00" defaultValue={props.rent} label="Valor Alugado Por Mês: R$ " onChange={this.handleOnChange} />
				<InputRange name="buy" min="100000" max="2000000" formatNumber="0,0[.]00" defaultValue={props.buy} label="Valor do para Compra: R$ " onChange={this.handleOnChange} />
				<InputRange name="livePerYear" min="1" max="30" defaultValue={props.livePerYear} label="Quanto tempo você irar morrar" onChange={this.handleOnChange} />
				<InputRange name="taxForYear" min="5" max="250" formatNumber="0cp" defaultValue={props.taxForYear} label="taxa de Juros Anual" onChange={this.handleOnChange} />
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
