import React from 'react'
import PropTypes from 'prop-types'

const SectionWrapper = ({ children, noBorder }) => (
  <div className={`pt4 pt4-ns mb4 flex-row items-center ph2 bt b--black-10 ${noBorder ? 'bt-0-ns' : ''}`}>
    {children}
  </div>
)

SectionWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  noBorder: PropTypes.bool,
}

SectionWrapper.defaultProps = {
  noBorder: false,
}

export default SectionWrapper
