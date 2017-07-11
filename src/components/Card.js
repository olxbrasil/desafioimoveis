import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children }) => (
  <div className="w-100 w-80-m w-70-l flex-column justify-center items-center mt5-ns ba-ns br2 b--black-30 shadow-4 pa4-ns">
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
