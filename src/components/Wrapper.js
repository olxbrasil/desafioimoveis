import React from 'react'
import PropTypes from 'prop-types'

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Wrapper ({children}) {
  return (
    <div className="mb4">
      {children}
    </div>
  )
}
