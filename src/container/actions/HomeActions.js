import Service from '../../core/Services/Service';

const getStatesActions = () => (async (dispatch: any) => {
	try {
		const service = await new Service();
		await dispatch({ type: 'REQUEST_DATA_FULLFILED', payload: service });
		await dispatch({ type: 'REQUEST_DATA_UF_FULLFILED', payload: Object.keys(service) });
	} catch (err) {
		throw new Error(err);
	}
});

export default getStatesActions;
