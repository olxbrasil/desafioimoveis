import React from 'react';
import { shallow } from 'enzyme';

import Chart from './index';

describe('<Chart />', () => {
	it('Should render values', () => {
		const wrapper = shallow(<Chart rent={3000} installment={6000} />);
		const expensive = wrapper.find('.chart__column-expensive > p');
		expect(expensive.first()).to.have.text('Comprar');
		expect(expensive.last()).to.have.text('R$6.000');
		const cheap = wrapper.find('.chart__column-cheap > p');
		expect(cheap.first()).to.have.text('Alugar');
		expect(cheap.last()).to.have.text('R$3.000');
	});

});
