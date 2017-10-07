import React, { Component } from 'react';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class Range extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
	}

	handleOnChange = (value) => {
		this.setState({
		  volume: value
		})
	  }

	render() {
		const { volume } = this.state
		return(
			<Slider
				value={volume}
				onChange={this.handleOnChange}
			/>
		);
	}
}

export default Range;
