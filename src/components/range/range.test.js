import React from 'react';
import ReactDOM from 'react-dom';
import RangeComponent from './index';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';

describe('<range/>', () => {
	let wrapper;
	let props;
	const middlewares = [thunk];
	const mockStore = configureMockStore(middlewares);
	const onChange = sinon.spy();
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
				<RangeComponent
					type="aluguel"
					value={1312}
					state="RJ"
					onChange={e => onChange(e)}
				/>
			</Provider>);
	});

	it('should have component is not null', () => {
		expect(wrapper.html()).not.toBeNull();
	});

	it('should have onChange range', () => {
		wrapper.simulate('change', 'SP');
	});
})
