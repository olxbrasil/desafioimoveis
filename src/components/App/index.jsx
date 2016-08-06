import React, { Component } from 'react';
import { connect } from 'react-redux'
import PriceConfigurator from 'components/PriceConfigurator';
import GraphComparator from 'components/GraphComparator';

class App extends Component {
  render() {
    console.log(this.props);
    const { rent, buy, livingTime, annualTax } = this.props;
    return (
      <div className="mdl-layout">
        <header className="mdl-layout__header">
          <h1 className="mdl-layout-title mdl-layout-title-centered">Comprar ou alugar?</h1>
        </header>

        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <PriceConfigurator
              rent={rent}
              buy={buy}
              livingTime={livingTime}
              annualTax={annualTax}
            />
          </div>

          <div className="mdl-cell mdl-cell--6-col">
            <GraphComparator
              rent={rent}
            />
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    rent: state.rent,
    buy: state.buy,
    livingTime: state.livingTime,
    annualTax: state.annualTax
  }
}

export default connect(
  mapStateToProps
)(App)
