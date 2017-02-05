import React from 'react';
import { shallow } from 'enzyme';

import InputRange from './index';

const props = {
	label: 'Teste',
	max: '40',
	min: '20',
	defaultValue: '0',
	step: '0',
	name: 'teste',
};

describe('<InputRange />', () => {
	it('Should have props with value', () => {
		const wrapper = shallow(<InputRange {...props} />);
		const input = wrapper.find('input');
		expect(input).to.have.prop('max', '40');
		expect(input).to.have.prop('min', '20');
		expect(input).to.have.prop('defaultValue', '0');
		expect(input).to.have.prop('step', '0');
		expect(input).to.have.prop('name', 'teste');
	});

	it('Should have teste inside of Label', () => {
		const wrapper = shallow(<InputRange {...props} />);
		const label = wrapper.find('label');
		expect(label).to.have.text('Teste 0');
	});

	it('Should have teste inside of complex Label', () => {
		props.label = { before: 'Teste', after: 'GG' };
		const wrapper = shallow(<InputRange {...props} />);
		const label = wrapper.find('label');
		expect(label).to.have.text('Teste 0 GG');
	});

	it('Should have teste inside of complex Label with number format', () => {
		props.label = { before: 'Teste', after: 'GG' };
		props.defaultValue = '300';
		props.formatNumber = '0,0[.]00';
		const wrapper = shallow(<InputRange {...props} />);
		const label = wrapper.find('label');
		expect(label).to.have.text('Teste 300 GG');
	});
});
