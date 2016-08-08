import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { keys } from 'lodash';
import * as actions from 'actions';
import StateSelector from './StateSelector';
import SlideSelector from './SlideSelector';

const configShape = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const propTypes = {
  rent: PropTypes.shape(configShape).isRequired,
  buy: PropTypes.shape(configShape).isRequired,
  livingTime: PropTypes.shape(configShape).isRequired,
  annualTax: PropTypes.shape(configShape).isRequired,
  states: PropTypes.object.isRequired,
  updatePrice: PropTypes.func.isRequired,
  getStates: PropTypes.func.isRequired,
  selectState: PropTypes.func.isRequired,
};

class PriceConfigurator extends Component {
  componentWillMount() {
    console.warn('Hey OLX guys');
    console.info('The PropTypes validation erros on material-ui above will be fine when this issue "https://github.com/callemall/material-ui/issues/4890" has been closed.');
    this.props.getStates();
  }

  componentWillReceiveProps(nextProps) {
    const { selected, list } = nextProps.states;
    if (this.props.states.selected !== selected) {
      this.props.updatePrice(list[selected].aluguel, 'rent');
      this.props.updatePrice(list[selected].compra, 'buy');
    }
  }

  render() {
    const {
      rent,
      buy,
      livingTime,
      annualTax,
      states,
      selectState,
    } = this.props;

    const stateList = [' '].concat(keys(states.list));

    return (
      <section className="mdl-card mdl-card-form mdl-shadow--2dp">
        <div className="mdl-card__supporting-text mdl-card__customize_values">
          <StateSelector
            list={stateList}
            isFetching={states.isFetching}
            selected={states.selected}
            selectState={selectState}
          />

          <SlideSelector
            range={rent}
            label={{
              description: 'Valor do aluguel por mês: ',
              prefix: 'R$',
            }}
            updatePrice={this.props.updatePrice}
            type={"rent"}
          />

          <SlideSelector
            range={buy}
            label={{
              description: 'Valor do imóvel para comprar: ',
              prefix: 'R$',
            }}
            updatePrice={this.props.updatePrice}
            type={"buy"}
          />

          <SlideSelector
            range={livingTime}
            label={{
              description: 'Por quanto tempo pretende morar? ',
              sufix: 'anos',
            }}
            updatePrice={this.props.updatePrice}
            type={"livingTime"}
          />

          <SlideSelector
            range={annualTax}
            label={{
              description: 'Taxa de juros anual: ',
              sufix: '%',
            }}
            updatePrice={this.props.updatePrice}
            type={"annualTax"}
          />
        </div>
      </section>
    );
  }
}

PriceConfigurator.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    rent: state.rent,
    buy: state.buy,
    livingTime: state.livingTime,
    annualTax: state.annualTax,
    states: state.states,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updatePrice: bindActionCreators(actions.updatePrice, dispatch),
    getStates: bindActionCreators(actions.getStates, dispatch),
    selectState: bindActionCreators(actions.selectState, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceConfigurator);
