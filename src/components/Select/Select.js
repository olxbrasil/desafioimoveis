import React from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'

import 'react-select/dist/react-select.css'
import './style.css'

const handleChange = fn => ({value}) => fn(value)

Select.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({value: PropTypes.string, label: PropTypes.string})
  ).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default function Select ({value, options, onChange}) {
  return (
    <ReactSelect
      value={value}
      clearable={false}
      searchable={false}
      options={options}
      onChange={handleChange(onChange)}
    />
  )
}
