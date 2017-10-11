const rangeActions = (type, value) => dispatch =>  {
	switch(type) {
		case 'aluguel':
			dispatch({type: 'ALUGUEL_VALUE_FULLFILED', payload: value});
			break;
		case 'compra':
			dispatch({type: 'COMPRA_VALUE_FULLFILED', payload: value});
			break;
		case 'anos':
			dispatch({type: 'ANOS_VALUE_FULLFILED', payload: value});
			break;
		case 'taxa':
			dispatch({type: 'TAXA_VALUE_FULLFILED', payload: value});
			break;
		default: return;
	}
};

export default rangeActions;
