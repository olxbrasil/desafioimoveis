import React, {Component} from 'react'

import Header from '../components/Header'
import Select from '../components/Select'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

const style = {flexGrow: 1}

const moneyFormatter = value => `R$ ${value}`

const yearFormatter = value => `${value} anos`

const percentFormatter = value => `${value}%`

export default class App extends Component {
  state = {city: 'RJ'}

  handleSelectChange = ({value}) => this.setState({city: value})

  render () {
    return (
      <div className="flex flex-column items-center min-vh-100 sans-serif">
        <Header />
        <section style={style} className="flex flex-wrap justify-center w-90 w-80-l">
          <div className="w-100 w-50-l">
            <Select
              title="Selecione seu estado"
              value={this.state.city}
              options={[
                {value: 'RJ', label: 'RJ'},
                {value: 'SP', label: 'SP'},
              ]}
              onChange={this.handleSelectChange}
            />
            <Slider
              title="Valor do aluguel por mês"
              min={100}
              max={1e4}
              step={25}
              valueFormatter={moneyFormatter}
              onChange={() => {}}
            />
            <Slider
              title="Valor do imóvel para comprar"
              min={1e4}
              max={2e6}
              step={1e4}
              valueFormatter={moneyFormatter}
              onChange={() => {}}
            />
            <Slider
              title="Quanto tempo você irá morar"
              min={1}
              max={30}
              defaultValue={10}
              valueFormatter={yearFormatter}
              onChange={() => {}}
            />
            <Slider
              title="Taxa de juros anual"
              min={0.5}
              max={25}
              step={0.5}
              defaultValue={11.5}
              valueFormatter={percentFormatter}
              onChange={() => {}}
            />
          </div>
          <div className="w-100 w-50-l tc">
            <h2 className="black-70">Custo total</h2>
          </div>
        </section>
        <Footer />
      </div>
    )
  }
}
