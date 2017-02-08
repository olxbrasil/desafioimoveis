// @flow
import Select from 'react-select';
import React, { Component } from 'react';

import './SelectCustom.scss';

type Props = {
	value: string,
	onChange: (value: any) => void,
};

type DefaultProps = {
	value: string,
}

type State = {
	value: string | number,
}

class SelectCustom extends Component<DefaultProps, Props, State> {
	static defaultProps: DefaultProps = {
		value: '',
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			value: props.value.length > 0 ? props.value : '',
		};
	}

	state: State;

	handleChange = (value: string | number) => {
		this.props.onChange(value);
		this.setState({ value });
	}

	render() {
		const newProps = { ...this.props };
		return (
			<div className="form-group">
				<label className="form-grour__label" htmlFor="state">Selecione seu Estado</label>
				<Select className="form-grour__input" {...newProps} value={this.state.value} onChange={this.handleChange} />
			</div>
		);
	}
}

export default SelectCustom;
