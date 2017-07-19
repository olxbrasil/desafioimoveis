import React, {Component} from 'react'
import PropTypes from 'prop-types'
import RCSlider from 'rc-slider/lib/Slider'

import Title from './Title'

import 'rc-slider/assets/index.css'

const trackStyle = {
  height: '8px',
  backgroundColor: '#19a974',
}

const railStyle = {height: '8px'}

const handleStyle = [
  {
    width: '26px',
    height: '26px',
    marginTop: '-9px',
    borderColor: '#19a974',
  },
]

export default class Slider extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    defaultValue: PropTypes.number,
    valueFormatter: PropTypes.func,
    onChange: PropTypes.func.isRequired,
  }

  static defaultProps = {
    defaultValue: 0,
    valueFormatter: value => value,
  }

  getDefaultValue = () => Math.max(this.props.defaultValue, this.props.min)

  state = {value: this.getDefaultValue()}

  handleChange = value => this.setState({value}, this.props.onChange)

  render () {
    const {value} = this.state
    const {title, min, max, step, valueFormatter} = this.props
    return (
      <div className="mb5">
        <div className="dt w-100 v-mid">
          <div className="dtc">
            <Title>{title}</Title>
          </div>
          <div className="dtc tr">
            <span className="fw6 f4 black-90">
              {valueFormatter(value)}
            </span>
          </div>
        </div>
        <div className="pl2">
          <RCSlider
            trackStyle={trackStyle}
            railStyle={railStyle}
            handleStyle={handleStyle}
            min={min}
            max={max}
            step={step}
            defaultValue={this.getDefaultValue()}
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}
