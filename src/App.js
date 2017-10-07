// @flow
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

type Props = {
	title: string,
}

class App extends Component {
	props: Props;
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{this.props.title}</h1>
				</header>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
