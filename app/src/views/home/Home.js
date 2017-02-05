// @flow
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import houseActions from '../../container/actions/houseActions';
import InputRange from '../../components/InputRange';

type Props = {
	buy: string,
	rent: string,
	livePerYear: string,
	taxForYear: string,
};

const Home = (props: Props) => <div>
	<InputRange name="buy" min="10" max="20" defaultValue={props.rent} label="Valor Alugado Por Mês" onChange={() => { }} />
	<InputRange name="rent" min="10" max="20" defaultValue={props.buy} label="Valor do para Compra" onChange={() => { }} />
	<InputRange name="livePerYear" min="10" max="20" defaultValue={props.livePerYear} label="Quanto tempo você irar morrar" onChange={() => { }} />
	<InputRange name="taxForYear" min="10" max="20" defaultValue={props.taxForYear} label="taxa de Juros Anual" onChange={() => { }} />
</div>;

function mapStateToProps(state) {
	return state.houseReducer;
}

function mapDispatchToProps(dispatch) {
	return {
		houseActions: bindActionCreators(houseActions, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
