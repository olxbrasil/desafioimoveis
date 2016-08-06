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
            value={rent.value || rent.min}
            label={"Valor do aluguel por mês:"}
            maskedValue={`R$ ${rent.value}`}
          />

          <SlideSelector
            min={buy.min}
            max={buy.max}
            step={buy.step}
            value={buy.value || buy.min}
            label={"Valor do imóvel para comprar:"}
            maskedValue={`R$ ${buy.value}`}
          />

          <SlideSelector
            min={livingTime.min}
            max={livingTime.max}
            step={livingTime.step}
            value={livingTime.value}
            label={"Por quanto tempo pretende morar?"}
            maskedValue={`${livingTime.value} anos`}
          />

          <SlideSelector
            min={annualTax.min}
            max={annualTax.max}
            step={annualTax.step}
            value={annualTax.value}
            label={"Taxa de juros anual:"}
            maskedValue={`${annualTax.value}%`}
          />
        </div>
      </div>
    );
  }
};

const configShape = {
  min: PropTypes.number.isRequired,
  max: PropTypes.oneOfType([
    PropTypes.number, PropTypes.object
  ]),
  step: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number, PropTypes.object
  ])
}

PriceConfigurator.propTypes = {
  rent: PropTypes.shape(configShape).isRequired,
  buy: PropTypes.shape(configShape).isRequired,
  livingTime: PropTypes.shape(configShape).isRequired,
  annualTax: PropTypes.shape(configShape).isRequired
}

export default PriceConfigurator;
