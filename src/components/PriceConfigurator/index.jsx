import React, { Component, PropTypes } from 'react';
import Slider from 'material-ui/Slider';
import StateSelector from './StateSelector';
import SlideSelector from './SlideSelector';

class PriceConfigurator extends Component {
  render() {
    const { rent, buy, livingTime, annualTax } = this.props;
    return (
      <div className="mdl-card mdl-card-form mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Comprar ou alugar?</h2>
        </div>
        <div className="mdl-card__supporting-text mdl-card__customize_values">
          <StateSelector />

          <SlideSelector
            min={rent.min}
            max={rent.max}
            step={rent.step}
            value={rent.value}
            label={"Valor do aluguel por mês:"}
            maskedValue={`R$ ${rent.value}`}
            updatePrice={this.props.updatePrice}
            type={"rent"}
          />

          <SlideSelector
            min={buy.min}
            max={buy.max}
            step={buy.step}
            value={buy.value}
            label={"Valor do imóvel para comprar:"}
            maskedValue={`R$ ${buy.value}`}
            updatePrice={this.props.updatePrice}
            type={"buy"}
          />

          <SlideSelector
            min={livingTime.min}
            max={livingTime.max}
            step={livingTime.step}
            value={livingTime.value}
            label={"Por quanto tempo pretende morar?"}
            maskedValue={`${livingTime.value} anos`}
            updatePrice={this.props.updatePrice}
            type={"livingTime"}
          />

          <SlideSelector
            min={annualTax.min}
            max={annualTax.max}
            step={annualTax.step}
            value={annualTax.value}
            label={"Taxa de juros anual:"}
            maskedValue={`${annualTax.value}%`}
            updatePrice={this.props.updatePrice}
            type={"annualTax"}
          />
        </div>
      </div>
    );
  }
};

const configShape = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

PriceConfigurator.propTypes = {
  rent: PropTypes.shape(configShape).isRequired,
  buy: PropTypes.shape(configShape).isRequired,
  livingTime: PropTypes.shape(configShape).isRequired,
  annualTax: PropTypes.shape(configShape).isRequired,
  updatePrice: PropTypes.func.isRequired
}

export default PriceConfigurator;
