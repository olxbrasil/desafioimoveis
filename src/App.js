import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import getStatesActions from './container/actions/HomeActions';
import RangeComponent from './components/range'

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
		const { home, range } = this.props;
		const { actualState } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">{home.title}</h1>
				</header>
				<form>
					<label>Selecione seu Estado</label>
					<select
						onChange={e => this.setState({actualState: e.target.value})}
						value={actualState}
					>
						 {
							home.uf.map(e =>
								<option key={Math.random()} value={e}>{e}</option>
							)
						 }
					</select>
				</form>
				<div className="container">
					<h2>{range.alguelValue}</h2>
					<RangeComponent
						type="aluguel"
						value={range.alguelValue}
						state={this.state.actualState}
					/>
				</div>
				<div className="container">
					<h2>{range.compraValue}</h2>
					<RangeComponent
						type="compra"
						value={range.compraValue}
						state={this.state.actualState}
					/>
				</div>
				<div className="container">
					<h2>{range.anosValue} anos</h2>
					<RangeComponent
						type="anos"
						value={range.anosValue}
						state={this.state.actualState}
						isDefault
					/>
				</div>
				<div className="container">
					<h2>{range.taxaValue}</h2>
					<RangeComponent
						type="taxa"
						value={range.taxaValue}
						state={this.state.actualState}
						isDefault
					/>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	home: state.homeReducer,
	range: state.rangeReducer,
});
const mapDispatchToProps = dispatch => bindActionCreators({ getStatesActions }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(App);
