import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { states } from 'utils/constants'
import { setState as setStateAction } from 'actions'

const StateSelector = ({ setState }) => (
  <div className="flex items-center">
    <span className="f4">Escolha seu estado:</span>
    <Dropdown
      className="ml4"
      placeholder="Estado"
      search
      selection
      options={states}
      onChange={(_, data) => setState(data.value)}
    />
  </div>
)

const mapDispatchToProps = dispatch => ({
  setState: state => dispatch(setStateAction(state)),
})

StateSelector.propTypes = {
  setState: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(StateSelector)
