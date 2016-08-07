import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './style.scss';

class GraphComparator extends Component {
  getHeight (rent, inst) {
    let height = {};

    if (rent > inst) {
      height.rent = 100 * (inst / rent);
      height.buy = 100;
    } else {
      height.rent = 100;
      height.buy = 100 * (rent / inst);
    }

    return height;
  }

  getMonthlyTaxByAnnualTax (annualTax) {
    const a = Math.pow((1 + annualTax/100), 1/12);
    const b = a - 1;
    return b;
  }

  getInstallment (total, tax, months) {
    const a = Math.pow(1 + tax, -months).toFixed(4);
    const b = ((1 - a) / tax).toFixed(4);

    const inst = total / b;
    return Number(inst.toFixed());
  }

  render() {
    const { rent, buy, livingTime, annualTax } = this.props;
    const months = livingTime * 12;
    const monthlyTax = this.getMonthlyTaxByAnnualTax(annualTax);
    const installment = this.getInstallment(buy, monthlyTax, months);

    const barHeights = this.getHeight(rent, installment);

    let rentClasses = classNames({
      'price-block': true,
      'price-block__better': installment > rent,
      'price-block__worst': rent > installment
    })

    let buyClasses = classNames({
      'price-block': true,
      'price-block__better': rent > installment,
      'price-block__worst': installment > rent
    })

    return (
      <section className="mdl-card mdl-card-form mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Custo total</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <div className="price-bar">
                <div className={rentClasses} style={{ height: `${barHeights.buy}%` }}>
                  <p>Alugar</p>
                  R$ {rent}
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--6-col mdl-cell--4-col-tablet mdl-cell--2-col-phone">
              <div className="price-bar">
                <div className={buyClasses} style={{ height: `${barHeights.rent}%` }}>
                  <p>Comprar</p>
                  R$ {installment}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

GraphComparator.propTypes = {
  rent: PropTypes.number.isRequired,
  buy: PropTypes.number.isRequired,
  livingTime: PropTypes.number.isRequired,
  annualTax: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  return {
    rent: state.rent.value,
    buy: state.buy.value,
    livingTime: state.livingTime.value,
    annualTax: state.annualTax.value
  }
}

export default connect(mapStateToProps)(GraphComparator);
