import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import accounting from 'accounting'

import Title from '../components/Title'
import Chart from '../components/Chart'
import Header from '../components/Header'
import Select from '../components/Select'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import Wrapper from '../components/Wrapper'
import SubTitle from '../components/SubTitle'
import * as actionCreators from '../redux/realEstate'
import SubTitleAndValue from '../components/SubTitleAndValue'

const style = {flexGrow: 1}

const moneyFormatter = value => accounting.formatMoney(value, 'R$ ', 0, '.')

const yearFormatter = value => `${value} anos`

const percentFormatter = value => `${value.toString().replace('.', ',')} %`

App.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  rentPrice: PropTypes.number.isRequired,
  buyPrice: PropTypes.number.isRequired,
  taxPercent: PropTypes.number.isRequired,
  yearsWillPay: PropTypes.number.isRequired,
  totalRentPrice: PropTypes.number.isRequired,
  totalBuyPrice: PropTypes.number.isRequired,
  monthlyBuyPrice: PropTypes.number.isRequired,
  updateCity: PropTypes.func.isRequired,
  updateRentPrice: PropTypes.func.isRequired,
  updateBuyPrice: PropTypes.func.isRequired,
  updateTaxPercent: PropTypes.func.isRequired,
  updateYearsWillPay: PropTypes.func.isRequired,
}

function App (props) {
  const options = props.cities.map(city => ({value: city, label: city}))
  const formattedRentPrice = moneyFormatter(props.rentPrice)
  return (
    <div className="flex flex-column items-center min-vh-100 bg-black-05 sans-serif">
      <Header />
      <section
        style={style}
        className="flex flex-wrap justify-center w-90 w-80-l"
      >
        <div className="w-100 w-50-l">
          <Wrapper>
            <SubTitle>Selecione seu estado</SubTitle>
            <Select
              value={props.city}
              options={options}
              onChange={props.updateCity}
            />
          </Wrapper>
          <Wrapper>
            <SubTitleAndValue
              title="Aluguel (mês)"
              value={formattedRentPrice}
            />
            <Slider
              min={100}
              max={1e4}
              step={25}
              value={props.rentPrice}
              onChange={props.updateRentPrice}
            />
          </Wrapper>
          <Wrapper>
            <SubTitleAndValue
              title="Preço do imóvel"
              value={moneyFormatter(props.buyPrice)}
            />
            <Slider
              min={1e4}
              max={2e6}
              step={1e4}
              value={props.buyPrice}
              onChange={props.updateBuyPrice}
            />
          </Wrapper>
          <Wrapper>
            <SubTitleAndValue
              title="Tempo que irá morar"
              value={yearFormatter(props.yearsWillPay)}
            />
            <Slider
              min={1}
              max={30}
              value={props.yearsWillPay}
              onChange={props.updateYearsWillPay}
            />
          </Wrapper>
          <Wrapper>
            <SubTitleAndValue
              title="Juros anual"
              value={percentFormatter(props.taxPercent)}
            />
            <Slider
              min={0.5}
              max={25}
              step={0.5}
              value={props.taxPercent}
              onChange={props.updateTaxPercent}
            />
          </Wrapper>
        </div>
        <div className="w-10-l" />
        <div className="w-100 w-40-l mb5 mb0-l tc">
          <div>
            <Title>Custo total</Title>
          </div>
          <Chart
            rentDisplay={formattedRentPrice}
            buyDisplay={moneyFormatter(props.monthlyBuyPrice)}
            totalRentPrice={props.totalRentPrice}
            totalBuyPrice={props.totalBuyPrice}
          />
        </div>
      </section>
      <Footer />
    </div>
  )
}

const mapStateToProps = ({realEstate}) => realEstate

export default connect(mapStateToProps, actionCreators)(App)
