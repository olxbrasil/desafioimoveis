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
	prefix: '',
	sufix: '',
};

describe('<InputRange />', () => {
	it('Should have props with value', () => {
		const wrapper = shallow(<InputRange {...props} />);
		const input = wrapper.find('input');
		expect(input).to.have.prop('max', '40');
		expect(input).to.have.prop('min', '20');
		expect(input).to.have.prop('value', '0');
		expect(input).to.have.prop('step', '0');
		expect(input).to.have.prop('name', 'teste');
	});

	it('Should have teste inside of Label', () => {
		const wrapper = shallow(<InputRange {...props} />);
		const label = wrapper.find('label');
		expect(label).to.have.text('Teste');
	});

	it('Should have teste mask with number format', () => {
		props.defaultValue = '300';
		props.formatNumber = '0,0[.]00';
		const wrapper = shallow(<InputRange {...props} />);
		const div = wrapper.find('.input-range__display');
		expect(div).to.have.text(' 300 ');
	});

	it('Should have teste mask with number format using prefix and sufix', () => {
		props.defaultValue = '300';
		props.formatNumber = '0,0[.]00';
		const wrapper = shallow(<InputRange {...props} prefix="R$" sufix="anos" />);
		const div = wrapper.find('.input-range__display');
		expect(div).to.have.text('R$ 300 anos');
	});

	it('Should have teste mask  with number format Custom Percente', () => {
		props.defaultValue = '25';
		props.formatNumber = '0cp';
		const wrapper = shallow(<InputRange {...props} />);
		const div = wrapper.find('.input-range__display');
		expect(div).to.have.text(' 2.5% ');
	});

	it('Should have teste inside of defaultValue and formatNumber is undefined', () => {
		props.defaultValue = undefined;
		props.formatNumber = undefined;
		const wrapper = shallow(<InputRange {...props} />);
		const div = wrapper.find('.input-range__display');
		expect(div).to.have.text(' ');
	});

	it('Should have teste inside of defaultValue and formatNumber is undefined', () => {
		props.defaultValue = undefined;
		props.formatNumber = undefined;
		const wrapper = shallow(<InputRange {...props} />);
		wrapper.setProps({ defaultValue: 10 });
		const input = wrapper.find('input');
		expect(input).to.have.prop('value', '10');

	});
});
