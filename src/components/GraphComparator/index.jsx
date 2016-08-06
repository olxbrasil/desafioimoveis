import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Interest from 'interestjs';

class GraphComparator extends Component {
  render() {
    const { rent, buy, livingTime, annualTax } = this.props;
    const inst = 1500;

    let rentHeight = 100;
    let buyHeight = 100;

    if (rent > inst) {
      rentHeight = 100 * inst / rent;
    } else {
      buyHeight = 100 * rent / inst;
    }

    let rentClasses = classNames({
      'price-block': true,
      'price-block__better': inst > rent,
      'price-block__worst': rent > inst
    })

    let buyClasses = classNames({
      'price-block': true,
      'price-block__better': rent > inst,
      'price-block__worst': inst > rent
    })

    console.log('PROPS', this.props);
    console.log('heights', rentHeight, buyHeight);
    return (
      <div className="mdl-card mdl-card-form mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Custo total</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col">
              <div className="price-bar">
                <div className={rentClasses} style={{ height: `${buyHeight}%` }}>
                  <p>Alugar</p>
                  R$ {rent}
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <div className="price-bar">
                <div className={buyClasses}  style={{ height: `${rentHeight}%` }}>
                  <p>Comprar</p>
                  R$ {inst}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

GraphComparator.propTypes = {
  rent: PropTypes.number.isRequired,
  buy: PropTypes.number.isRequired,
  livingTime: PropTypes.number.isRequired,
  annualTax: PropTypes.number.isRequired
}

export default GraphComparator;
