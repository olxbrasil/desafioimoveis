import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Header from '../components/Header'
import Select from '../components/Select'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import * as actionCreators from '../redux/realEstate'

const style = {flexGrow: 1}

const moneyFormatter = value => `R$ ${value}`

const yearFormatter = value => `${value} anos`

const percentFormatter = value => `${value}%`

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  rentPrice: PropTypes.number.isRequired,
  buyPrice: PropTypes.number.isRequired,
  taxPercent: PropTypes.number.isRequired,
  yearsWillPay: PropTypes.number.isRequired,
  updateCity: PropTypes.func.isRequired,
  updateRentPrice: PropTypes.func.isRequired,
  updateBuyPrice: PropTypes.func.isRequired,
  updateTaxPercent: PropTypes.func.isRequired,
  updateYearsWillPay: PropTypes.func.isRequired,
}

function App (props) {
  const options = props.cities.map(city => ({value: city, label: city}))
  return (
    <div className="flex flex-column items-center min-vh-100 sans-serif">
      <Header />
      <section style={style} className="flex flex-wrap justify-center w-90 w-80-l">
        <div className="w-100 w-50-l">
          <Select
            title="Selecione seu estado"
            value={props.city}
            options={options}
            onChange={props.updateCity}
          />
          <Slider
            title="Valor do aluguel por mês"
            min={100}
            max={1e4}
            step={25}
            value={props.rentPrice}
            valueFormatter={moneyFormatter}
            onChange={props.updateRentPrice}
          />
          <Slider
            title="Valor do imóvel para comprar"
            min={1e4}
            max={2e6}
            step={1e4}
            value={props.buyPrice}
            valueFormatter={moneyFormatter}
            onChange={props.updateBuyPrice}
          />
          <Slider
            title="Quanto tempo você irá morar"
            min={1}
            max={30}
            value={props.yearsWillPay}
            valueFormatter={yearFormatter}
            onChange={props.updateYearsWillPay}
          />
          <Slider
            title="Taxa de juros anual"
            min={0.5}
            max={25}
            step={0.5}
            value={props.taxPercent}
            valueFormatter={percentFormatter}
            onChange={props.updateTaxPercent}
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

const mapStateToProps = ({realEstate}) => realEstate

export default connect(mapStateToProps, actionCreators)(App)
