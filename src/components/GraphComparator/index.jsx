import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { getMonthlyTaxByAnnualTax, getInstallment } from 'actions/math';
import Graph from './Graph';

const propTypes = {
  rentValue: PropTypes.number.isRequired,
  buyValue: PropTypes.number.isRequired,
  months: PropTypes.number.isRequired,
  annualTax: PropTypes.number.isRequired,
};

const GraphComparator = ({ rentValue, buyValue, months, annualTax }) => {
  const monthlyTax = getMonthlyTaxByAnnualTax(annualTax);
  const installment = getInstallment(buyValue, monthlyTax, months);

  const rentHeight = rentValue > installment ? 100 : (100 * rentValue) / installment;
  const buyHeight = rentValue < installment ? 100 : (100 * installment) / rentValue;

  return (
    <section className="mdl-card mdl-card-form mdl-card-comparator">
      <div className="mdl-card__supporting-text">
        <div className="mdl-grid">
          <div className="mdl-cell">
            <p>Custo mensal</p>
          </div>
        </div>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
            <Graph
              title={"Alugar"}
              value={rentValue}
              height={rentHeight}
              best={rentValue < installment}
            />
          </div>
          <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
            <Graph
              title={"Comprar"}
              value={installment}
              height={buyHeight}
              best={installment < rentValue}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

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
