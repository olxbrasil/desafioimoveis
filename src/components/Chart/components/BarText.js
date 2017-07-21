import React from 'react'
import PropTypes from 'prop-types'

BarText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
}

export default function BarText ({label, value}) {
  return (
    <div>
      <span>{label}</span>
      <br />
      <span className="fw6">
        R$ {value} ao mês
      </span>
    </div>
  )
}
