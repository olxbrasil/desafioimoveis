import React from 'react';
import {
	mount
} from 'enzyme';
import sinon from 'sinon';

import { Home } from './index';
import InputRange from '../../components/InputRange';
import SelectCustom from '../../components/SelectCustom';
import Chart from '../../components/Chart';

const props = {
	buy: 0,
	rent: 0,
	livePerYear: 10,
	taxForYear: 115,
	installment: 0,
	houseActions: {
		changeValue: sinon.spy(),
		calculate: sinon.spy(),
	},
	stateActions: {
		fetchStates: sinon.spy(),
		changeState: sinon.spy(),
	},
	states: [],
	selectedState: 'RJ',
	selectedBuy: 0,
	selectedRent: 0,
};

describe('<Home />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Home {...props} />);
	});
	it('Should have component <InputRange/>', () => {
		expect(wrapper.find(InputRange)).to.have.length(4);
	});
	it('Should have component <SelectCustom/>', () => {
		expect(wrapper.find(SelectCustom)).to.have.length(1);
	});
	it('Should have componentWillMount call', () => {
		const spy = sinon.spy(Home.prototype, 'componentWillMount');
		wrapper = mount(<Home {...props} />);
		expect(spy.calledOnce).to.equal(true);
	});
	it('Should have componentWillReceiveProps call', () => {
		const spy = sinon.spy(Home.prototype, 'componentWillReceiveProps');
		wrapper = mount(<Home {...props} />);
		expect(spy.calledOnce).to.equal(false);
		wrapper.setProps({ buy: 10 });
		expect(spy.calledOnce).to.equal(true);
	});
	it('Should have componentWillReceiveProps change props', () => {
		wrapper.setProps({ selectedState: '' });
		expect(wrapper.prop('selectedState')).to.equal('');
	});
});
