import React from 'react'
import PropTypes from 'prop-types'

const style = {transition: 'background-color 300ms linear'}

Bar.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string.isRequired,
}

Bar.defaultProps = {
  color: 'green',
}

export default function Bar ({color, children}) {
  return (
    <div
      style={style}
      className={`h-100 pt3 ph3 bg-${color} br3 tl`}
    >
      {children}
    </div>
  )
}
