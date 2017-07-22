import React from 'react'
import PropType from 'prop-types'

import SubTitle from './SubTitle'

SubTitleAndValue.propTypes = {
  title: PropType.string.isRequired,
  value: PropType.string.isRequired,
}

export default function SubTitleAndValue ({title, value}) {
  return (
    <div className="dt w-100 v-mid">
      <div className="dtc">
        <SubTitle>{title}</SubTitle>
      </div>
      <div className="dtc tr">
        <span className="f4 fw6 black">
          {value}
        </span>
      </div>
    </div>
  )
}
