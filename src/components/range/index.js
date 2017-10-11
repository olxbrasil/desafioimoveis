import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


import template from './TemplateTypes';
import rangeActions from '../../container/actions/RangeActions';

class RangeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value,
			type: props.type,
			template: template[props.type],
		};
	}

	componentWillMount() {
		const { type, value } = this.state;
		this.props.rangeActions(type, value);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.state !== this.props.state && !this.props.isDefault) {
			const { states } = this.props.home;
			const { type } = this.state;
			this.setState({value: states[nextProps.state][type]});
			this.props.rangeActions(type, states[nextProps.state][type]);
		}
	}

	handleOnChange = value => {
		const { type } = this.state;
		this.setState({ value });
		this.props.rangeActions(type, value);
	}

	render() {
		const { value, template } = this.state;
		return(
			<InputRange
				maxValue={template.max}
				minValue={template.min}
				value={value}
				step={template.step}
				onChange={this.handleOnChange}
				onClick={this.handleOnChange}
				formatLabel={value => template.formatLabel(value)}
			/>
		);
	}
}

const mapStateToProps = state => ({
	home: state.homeReducer,
	range: state.rangeReducer,
});
const mapDispatchToProps = dispatch => bindActionCreators({
	rangeActions,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RangeComponent);
