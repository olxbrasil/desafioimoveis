import React, { Component } from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Slider from 'material-ui/Slider';
import injectTapEventPlugin from 'react-tap-event-plugin';

@observer
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      value: null,
      options: [' ', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  componentWillMount () {
    console.info('The PropTypes validation erros on material-ui will be fine when this issue "https://github.com/callemall/material-ui/issues/4890" is closed.')
    injectTapEventPlugin();
  }

  render() {
    const items = []
    for (let i = 0; i < this.state.options.length; i++) {
      const value = this.state.options[i];
      items.push(<MenuItem key={i} value={value} primaryText={value} />)
    }
    // const items = this.state.options.map(state => <MenuItem key={state} value={state} primaryText={state} /> )

    return (
      <div className="mdl-layout">
        <header className="mdl-layout__header">
          <h1 className="mdl-layout-title mdl-layout-title-centered">Comprar ou alugar?</h1>
        </header>
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--6-col">
            <div className="mdl-card mdl-card-form mdl-shadow--2dp">
              <div className="mdl-card__title">
                <h2 className="mdl-card__title-text">Comprar ou alugar?</h2>
              </div>
              <div className="mdl-card__supporting-text mdl-card__customize_values">
                <SelectField
                  id="state-select"
                  maxHeight={200}
                  style={{width: '100%', marginBottom: 24}}
                  value={this.state.value}
                  onChange={this.handleChange}
                  floatingLabelText="Selecione o seu estado"
                >
                  {items}
                </SelectField>

                <div className="value-input-block">
                  <p>Valor do aluguel por mês: R$ 3.000</p>
                  <Slider
                  sliderStyle={{marginTop: 12, marginBottom: 24}}
                  min={100}
                  max={10000}
                  step={50}
                  defaultValue={3000}
                  />
                </div>

                <div className="value-input-block">
                  <p>Valor do imóvel para comprar: R$ 100.000</p>
                  <Slider
                  sliderStyle={{marginTop: 12, marginBottom: 24}}
                  min={10000}
                  max={2000000}
                  step={10000}
                  defaultValue={100000}
                  />
                </div>

                <div className="value-input-block">
                  <p>Por quanto tempo pretende morar? 10 anos</p>
                  <Slider
                  sliderStyle={{marginTop: 12, marginBottom: 24}}
                  min={1}
                  max={30}
                  step={1}
                  defaultValue={10}
                  />
                </div>

                <div className="value-input-block">
                  <p>Taxa de juros anual: 11.5%</p>
                  <Slider
                  sliderStyle={{marginTop: 12, marginBottom: 24}}
                  min={0.5}
                  max={25}
                  step={0.5}
                  defaultValue={11.5}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mdl-cell mdl-cell--6-col">
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
                        R$ 1.500,00
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
          </div>
        </div>
        <DevTools />
      </div>
    );
  }
};

export default App;
