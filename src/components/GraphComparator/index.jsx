import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMonthlyTaxByAnnualTax, getInstallment } from 'actions/math';
import Graph from './Graph';

const propTypes = {
  rentValue: PropTypes.number.isRequired,
  buyValue: PropTypes.number.isRequired,
  months: PropTypes.number.isRequired,
  annualTax: PropTypes.number.isRequired,
};

class GraphComparator extends Component {
  getHeight(rent, inst) {
    const height = {};

    if (rent > inst) {
      height.rent = 100;
      height.buy = (100 * inst) / rent;
    } else {
      height.rent = (100 * rent) / inst;
      height.buy = 100;
    }

    return height;
  }

  render() {
    const { rentValue, buyValue, months, annualTax } = this.props;
    const monthlyTax = getMonthlyTaxByAnnualTax(annualTax);
    const installment = getInstallment(buyValue, monthlyTax, months);
    const barHeights = this.getHeight(rentValue, installment);

    return (
      <section className="mdl-card mdl-card-form mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Custo total</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <Graph
                title={"Alugar"}
                value={rentValue}
                height={barHeights.rent}
                best={rentValue < installment}
              />
            </div>
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <Graph
                title={"Comprar"}
                value={installment}
                height={barHeights.buy}
                best={installment < rentValue}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

GraphComparator.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    rentValue: state.rent.value,
    buyValue: state.buy.value,
    months: state.livingTime.value * 12,
    annualTax: state.annualTax.value,
  };
}

export default connect(mapStateToProps)(GraphComparator);
