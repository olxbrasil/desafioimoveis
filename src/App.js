import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoanJS from 'loanjs';
import getStatesActions from './container/actions/HomeActions';
import RangeComponent from './components/range';
import BarChart from './components/barChart';


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

	componentWillReceiveProps(nextProps) {
		const { range } = nextProps;
		const loanCompra = new LoanJS.Loan(
			range.compraValue,
			range.anosValue * 12,
			range.taxaValue,
			true,
		);
		const totalAlugel = (range.anosValue * 12) * range.alguelValue;
		this.setState({
			totalAlugel,
			totalCompra: loanCompra.sum,
		});
	}

	toBRL = number => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);

	render() {
		const { home, range } = this.props;
		const { actualState } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">{home.title}</h1>
				</header>
				<form className="container app__form">
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
					<h2>Valor do aluguel por mês: {this.toBRL(range.alguelValue)}</h2>
					<RangeComponent
						type="aluguel"
						value={range.alguelValue}
						state={this.state.actualState}
					/>
				</div>
				<div className="container">
					<h2>Valor do imóvel para comprar: {this.toBRL(range.compraValue)}</h2>
					<RangeComponent
						type="compra"
						value={range.compraValue}
						state={this.state.actualState}
					/>
				</div>
				<div className="container">
					<h2>Eu vou morar por {range.anosValue} anos</h2>
					<RangeComponent
						type="anos"
						value={range.anosValue}
						state={this.state.actualState}
						isDefault
					/>
				</div>
				<div className="container">
					<h2>Taxa de juros anual {range.taxaValue}%</h2>
					<RangeComponent
						type="taxa"
						value={range.taxaValue}
						state={this.state.actualState}
						isDefault
					/>
				</div>
				<BarChart data={[this.state.totalAlugel, this.state.totalCompra]} />
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
