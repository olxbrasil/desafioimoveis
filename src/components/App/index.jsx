import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PriceConfigurator from 'components/PriceConfigurator';
import GraphComparator from 'components/GraphComparator';
import * as actions from 'actions';

class App extends Component {
  render() {
    const { rent, buy, livingTime, annualTax, updatePrice } = this.props;
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
              updatePrice={updatePrice}
            />
          </div>

          <div className="mdl-cell mdl-cell--6-col">
            <GraphComparator
              rent={rent.value}
              buy={buy.value}
              livingTime={livingTime.value}
              annualTax={annualTax.value}
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

function mapDispatchToProps (dispatch) {
  return {
    updatePrice: bindActionCreators(actions.updatePrice, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
