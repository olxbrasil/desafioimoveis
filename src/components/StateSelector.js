import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { setState as setStateAction } from 'actions'

const StateSelector = ({ setState, states, loading }) => {
  const statesList = Object.keys(states).map(state => ({
    key: state,
    value: state,
    text: states[state].text,
  }))

  return (
    <div className="flex flex-column flex-row-ns items-center">
      <span className="f4">Escolha seu estado:</span>
      <Dropdown
        className="ml0 mt3 ml4-ns mt0-ns"
        placeholder="Estado"
        search
        selection
        disabled={loading}
        options={statesList || []}
        onChange={(_, data) => setState(data.value)}
      />
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setState: state => dispatch(setStateAction(state)),
})

const mapStateToProps = ({ states, loading }) => ({ states, loading })

StateSelector.propTypes = {
  setState: PropTypes.func.isRequired,
  states: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(StateSelector)
