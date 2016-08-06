import React, { Component, PropTypes } from 'react';

class GraphComparator extends Component {
  render() {
    return (
      <div className="mdl-card mdl-card-form mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Custo total</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--6-col">
              <div className="price-bar">
                <h5>Alugar</h5>
                <div className="price-block price-block__worst">
                  R$ {this.props.rent}
                </div>
              </div>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <div className="price-bar">
                <h5>Comprar</h5>
                <div className="price-block price-block__better">
                  R$ 1.500,00
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
  rent: PropTypes.number.isRequired
}

export default GraphComparator;
