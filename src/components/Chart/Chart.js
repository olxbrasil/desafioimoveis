import React from 'react'
import PropTypes from 'prop-types'

import SubTitle from '../SubTitle'
import Bar from './components/Bar'
import BarText from './components/BarText'

const CONTAINER_HEIGHT = 550
const MAX_CONTAINER_PADDING = 436
const style = {height: `${CONTAINER_HEIGHT}px`}
const barWrapperClasses = 'dib v-btm h-100'

const barWrapperStyle = padding => ({width: '45%', paddingTop: padding})

const calculatePercent = (rentPrice, buyPrice) => {
  const max = Math.max(rentPrice, buyPrice)
  const min = Math.min(rentPrice, buyPrice)
  const percent = ((max - min) * 100) / max
  return Math.round(percent)
}

const calculatePadding = percent => {
  const padding = CONTAINER_HEIGHT * (percent / 100)
  return Math.min(padding, MAX_CONTAINER_PADDING)
}

Chart.propTypes = {
  rentDisplay: PropTypes.string.isRequired,
  buyDisplay: PropTypes.string.isRequired,
  totalRentPrice: PropTypes.number.isRequired,
  totalBuyPrice: PropTypes.number.isRequired,
}

export default function Chart (props) {
  const isRentHigher = props.totalRentPrice > props.totalBuyPrice
  const percent = calculatePercent(props.totalRentPrice, props.totalBuyPrice)
  const padding = calculatePadding(percent)
  const rentPadding = isRentHigher ? padding : 0
  const buyPadding = !isRentHigher ? padding : 0
  const rentColor = isRentHigher ? 'mid-gray' : 'green'
  const buyColor = !isRentHigher ? 'mid-gray' : 'green'
  const message = isRentHigher
    ? `Comprar é ${percent}% mais barato`
    : `Alugar é ${percent}% mais barato`
  return (
    <div>
      <div style={style} className="f3 white">
        <div
          style={barWrapperStyle(rentPadding)}
          className={barWrapperClasses}
        >
          <Bar color={rentColor}>
            <BarText label="Alugar" value={props.rentDisplay} />
          </Bar>
        </div>
        <div className="dib v-btm w-10" />
        <div
          style={barWrapperStyle(buyPadding)}
          className={barWrapperClasses}
        >
          <Bar color={buyColor}>
            <BarText label="Comprar" value={props.buyDisplay} />
          </Bar>
        </div>
      </div>
      <SubTitle>{message}</SubTitle>
    </div>
  )
}
