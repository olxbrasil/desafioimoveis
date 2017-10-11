import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
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
	const onChange = sinon.spy();

	beforeEach(() => {
		props = {
			homeReducer: {
				uf: []
			},
			rangeReducer: {
				alguelValue: 770,
				compraValue: 61600,
				anosValue: 10,
				taxaValue: 11.5,
			},
			getStatesActions: () => {}
		}
		const store = mockStore({ ...props });
		wrapper = mount(
			<Provider store={store}>
				<App />
			</Provider>);
	});

	it('should have component is not null', () => {
		expect(wrapper.html()).not.toBeNull();
	});

	it('shoudl have component on change uf', () => {
		// wrapper.find('.app__form select').simulate('change');
		// expect(wrapper.state('actualState')).toBe('SP');
	});

	// it('should have component Receive Props', () => {
	// 	const spy = sinon.spy(App.prototype, 'componentWillReceiveProps');
	// 	const middlewares = [thunk];
	// 	const mockStore = configureMockStore(middlewares);
	// 	const store = mockStore({ ...props });
	// 	const component = mount( <App store={store} {...props} /> );
	// 	const nextProps = {
	// 		alguelValue: 880,
	// 		compraValue: 41600,
	// 		anosValue: 20,
	// 		taxaValue: 12.5,
	// 	};
	// 	expect(spy.calledOnce).toBe(false);
	// 	component.setProps({...nextProps});
	// 	expect(spy.calledOnce).toBe(true);
	// });
})
