import React from 'react'
import PropTypes from 'prop-types'
import ReactSelect from 'react-select'

import Title from '../Title'

import 'react-select/dist/react-select.css'
import './style.css'

Select.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({value: PropTypes.string, label: PropTypes.string})
  ).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default function Select ({title, value, options, onChange}) {
  return (
    <div className="dt mb4 v-mid">
      <div className="dtc">
        <Title>{title}</Title>
      </div>
      <div className="dtc w-30 pl3">
        <ReactSelect
          value={value}
          clearable={false}
          searchable={false}
          options={options}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
