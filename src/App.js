import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getStatesActions from './container/actions/HomeActions';
import Range from './components/range'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			actualState: 'AC',
		}
	}
	componentWillMount() {
		this.props.getStatesActions();
	}
	render() {
		const { states } = this.props.home;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{this.props.home.title}</h1>
				</header>
				<form>
					<label>Selecione seu Estado</label>
					<select	onChange={e => this.setState({actualState: e.target.value})}>
						 {
							states.map(e =>
								<option key={e.id} value={e.state}>{e.state}</option>
							)
						 }
					</select>
				</form>
				<h2>Estado atual: {this.state.actualState}</h2>
				<Range />
			</div>
		);
	}
}

const mapStateToProps = state => ({ home: state.homeReducer });
 const mapDispatchToProps = dispatch => bindActionCreators({ getStatesActions }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
