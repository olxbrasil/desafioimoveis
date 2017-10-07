import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getStatesActions from './container/actions/HomeActions';

class App extends Component {
	componentWillMount() {
		this.props.getStatesActions();
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{this.props.home.title}</h1>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => ({ home: state.homeReducer });
 const mapDispatchToProps = dispatch => bindActionCreators({ getStatesActions }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
