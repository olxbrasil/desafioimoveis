import React from 'react';
import { mount, shallow } from 'enzyme';

import SelectCustom from './index';

const props = {
	onChange: () => {},
	options: [],
	placeholder: 'Selecione',
	clearable: false,
};

describe('<SelectCustom />', () => {
	it('Expect props and check state', () => {
		const wrapper = mount(<SelectCustom {...props} />);
		expect(wrapper).to.have.state('value');
		expect(wrapper).to.have.prop('onChange');
		expect(wrapper).to.have.prop('options').a('array').length(0);
		expect(wrapper).to.have.prop('placeholder').equal('Selecione');
		expect(wrapper).to.have.prop('clearable').equal(false);
	});
	it('Expect change action', () => {
		const wrapper = mount(<SelectCustom {...props} />);
		wrapper.instance().handleChange(10);
		expect(wrapper).to.have.state('value').equal(10);
	});
});
