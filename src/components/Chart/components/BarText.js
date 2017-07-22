import React from 'react'
import PropTypes from 'prop-types'

BarText.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}

export default function BarText ({label, value}) {
  return (
    <div>
      <span>{label}</span>
      <br />
      <span className="fw6">
        {value} ao mês
      </span>
    </div>
  )
}
