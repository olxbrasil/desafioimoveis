const rangeAlguelAction = value => dispatch => dispatch({
	type: 'ALUGUEL_VALUE_FULLFILED', payload: value
});

export const rangeCompraActions = value => dispatch => dispatch({
	type: 'COMPRA_VALUE_FULLFILED', payload: value
});

export const rangeAnosActions = value => dispatch => dispatch({
	type: 'ANOS_VALUE_FULLFILED', payload: value
});

export const rangeTaxaActions = value => dispatch => dispatch({
	type: 'TAXA_VALUE_FULLFILED', payload: value
});

export default rangeAlguelAction;
