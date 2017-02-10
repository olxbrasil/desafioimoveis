// @flow
import React, { Component } from 'react';
import numeral from '../../helpers/numeral';

import './InputRange.scss';

type Props = {
	label: string,
	prefix?: string,
	sufix?: string,
	max: string,
	min: string,
	defaultValue?: number,
	formatNumber?: string,
	step?: string,
	name: string,
	onChange: (value: string | number, name: string) => void
}

type State = {
	value: string,
}

type DefaultProps = {
	step: string,
}

class InputRange extends Component {
	static defaultProps: DefaultProps = {
		step: '1',
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			value: this.getDefaultvalue(props),
		};
	}

	state: State;

	componentWillReceiveProps(nextProps: Props) {
		if (this.props.defaultValue !== nextProps.defaultValue) {
			this.setState({ value: this.getDefaultvalue(nextProps) });
		}
	}

	getDefaultvalue = (props: Props): string => (typeof props.defaultValue === 'undefined' ? '' : props.defaultValue.toString());

	props: Props;

	handleChange = (event: Object) => {
		const { name, value } = event.target;
		this.setState({ value });
		this.props.onChange(value, name);
	};

	formateValueToShow = (): string => {
		const { props, state } = this;
		if (typeof props.formatNumber !== 'undefined') return numeral(state.value).format(props.formatNumber);
		return state.value;
	}

	renderLabel = () => {
		const { props } = this;
		return <label className="form-group__label input-range__label" htmlFor={props.name}>{props.label}</label>;
	}

	render() {
		const { props } = this;
		return (
			<div className="form-group">
				{this.renderLabel()}
				<input
					className="form-group__input input-range"
					type="range"
					max={props.max}
					min={props.min}
					value={this.state.value}
					step={props.step}
					name={props.name}
					onChange={this.handleChange}
				/>
				<div className="input-range__display">
					{props.prefix}{this.formateValueToShow()}{props.sufix}
				</div>
			</div>
		);
	}
}

export default InputRange;
