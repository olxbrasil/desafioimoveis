import React from 'react';
import ReactDOM from 'react-dom';
import Range from './index';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

describe('<App/>', () => {
	let wrapper;
	let props;
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	beforeEach(() => {
		props = {
			homeReducer: {
				uf: []
			},
			rangeReducer: {},
			getStatesActions: () => {}
		}
		const store = mockStore({ ...props });
		wrapper = mount(
			<Provider store={store}>
				<Range
					type="aluguel"
					value={12312}
					state={432432}
				/>
			</Provider>);
	});

	it('should have component is not null', () => {
		expect(wrapper.html()).is.not.null;
	});
})
