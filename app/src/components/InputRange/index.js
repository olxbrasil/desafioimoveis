// @flow
import React, { Component } from 'react';
import numeral from '../../helpers/numeral';

type Props = {
	label: { before: string, after: string } | string,
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

class InputRange extends Component {

	static defaultProps = {
		step: '1',
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			value: typeof props.defaultValue === 'undefined' ? '' : props.defaultValue.toString(),
		};
	}

	state: State;
	props: Props;

	handleChange: (event: Object) => void;

	handleChange = (event: Object) => {
		const { name, value } = event.target;
		this.setState({ value });
		this.props.onChange(value, name);
	};

	formateValueToShow: () => string;

	formateValueToShow = () => {
		const { props, state } = this;
		if (props.formatNumber !== 'undefined') return numeral(state.value).format(props.formatNumber);
		return state.value;
	}

	renderLabel: () => any;

	renderLabel = () => {
		const { props } = this;
		const value = this.formateValueToShow();
		if (typeof props.label === 'object') {
			return (
				<label htmlFor={props.name}>
					{props.label.before} {value} {props.label.after}
				</label>
			);
		}
		return <label htmlFor={props.name}>{props.label} {value}</label>;
	}

	render() {
		return (
			<div>
				{this.renderLabel()}
				<input
					type="range"
					max={this.props.max}
					min={this.props.min}
					defaultValue={this.props.defaultValue}
					step={this.props.step}
					name={this.props.name}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default InputRange;
