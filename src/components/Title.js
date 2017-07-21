import React from 'react'
import PropTypes from 'prop-types'

Title.propTypes = {
  children: PropTypes.string.isRequired,
}

export default function Title ({children}) {
  return (
    <h2 className="black-70">{children}</h2>
  )
}
