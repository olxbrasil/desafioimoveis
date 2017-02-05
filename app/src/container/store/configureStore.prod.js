import { createStore, applyMiddleware } from 'redux';
import fsaThunkMiddleware from 'redux-fsa-thunk';

import allReducers from '../reducers';

export default function configureStore(initialState) {

	const middleware = applyMiddleware(fsaThunkMiddleware);
	return createStore(allReducers, initialState, middleware);
}
