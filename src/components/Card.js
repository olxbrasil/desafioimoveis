import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children }) => (
  <div className="w-50 flex-column justify-center items-center mt5 ba br2 b--black-30 shadow-4 pa4">
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
