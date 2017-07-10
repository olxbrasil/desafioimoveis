import React from 'react'
import PropTypes from 'prop-types'

const SectionWrapper = ({ children }) => (
  <div className="mt4 mt5-ns flex-row items-center">
    {children}
  </div>
)

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SectionWrapper
