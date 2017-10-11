import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


import template from './TemplateTypes';
import rangeAlguelAction, {
	rangeCompraActions,
	rangeAnosActions,
	rangeTaxaActions
} from '../../container/actions/RangeActions';

class RangeComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.value,
			type: props.type,
			template: template[props.type],
		};
	}

	strategyAction = (type, value) => {
		switch(type) {
			case 'aluguel':
				this.props.rangeAlguelAction(value);
				break;
			case 'compra':
				this.props.rangeCompraActions(value);
				break;
			case 'anos':
				this.props.rangeAnosActions(value);
				break;
			case 'taxa':
				this.props.rangeTaxaActions(value);
				break;
			default: return;
		}
	}

	componentWillMount() {
		const { type, value } = this.state;
		this.strategyAction(type, value);
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.state !== this.props.state && !this.props.isDefault) {
			const { states } = this.props.home;
			const { type } = this.state;
			this.setState({value: states[nextProps.state][type]});
			this.strategyAction(type, states[nextProps.state][type]);
		}
	}

	handleOnChange = value => {
		const { type } = this.state;
		this.setState({ value });
		this.strategyAction(type, value);
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
	rangeAlguelAction,
	rangeCompraActions,
	rangeAnosActions,
	rangeTaxaActions,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(RangeComponent);
