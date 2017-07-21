import React from 'react'
import PropTypes from 'prop-types'

import Bar from './components/Bar'
import BarText from './components/BarText'

const CONTAINER_HEIGHT = 550
const MAX_CONTAINER_PADDING = 436
const style = {height: `${CONTAINER_HEIGHT}px`}
const barWrapperClasses = 'dib v-btm w-40 h-100'

const calculatePadding = (rentPrice, buyPrice) => {
  const max = Math.max(rentPrice, buyPrice)
  const min = Math.min(rentPrice, buyPrice)
  const percent = ((max - min) * 100) / max
  const padding = CONTAINER_HEIGHT * (percent / 100)
  return Math.min(padding, MAX_CONTAINER_PADDING)
}

Chart.propTypes = {
  title: PropTypes.string,
  rentPrice: PropTypes.number.isRequired,
  buyPrice: PropTypes.number.isRequired,
  totalRentPrice: PropTypes.number.isRequired,
  totalBuyPrice: PropTypes.number.isRequired,
}

export default function Chart (props) {
  const isRentHigher = props.totalRentPrice > props.totalBuyPrice
  const padding = calculatePadding(props.totalRentPrice, props.totalBuyPrice)
  const rentPadding = isRentHigher ? padding : 0
  const buyPadding = !isRentHigher ? padding : 0
  const rentColor = isRentHigher ? 'mid-gray' : 'green'
  const buyColor = !isRentHigher ? 'mid-gray' : 'green'
  return (
    <div>
      <h1 className="black-80">{props.title}</h1>
      <div style={style} className="f3 white">
        <div
          style={{paddingTop: rentPadding}}
          className={barWrapperClasses}
        >
          <Bar color={rentColor}>
            <BarText label="Alugar" value={props.rentPrice} />
          </Bar>
        </div>
        <div className="dib v-btm w-10" />
        <div
          style={{paddingTop: buyPadding}}
          className={barWrapperClasses}
        >
          <Bar color={buyColor}>
            <BarText label="Comprar" value={props.buyPrice} />
          </Bar>
        </div>
      </div>
    </div>
  )
}
