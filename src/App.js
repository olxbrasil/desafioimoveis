import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Card from 'components/Card'
import StateSelector from 'components/StateSelector'
import RentInput from 'components/RentInput'
import BuyInput from 'components/BuyInput'
import TimeInput from 'components/TimeInput'
import InterestInput from 'components/InterestInput'
import ComparisonContainer from 'components/ComparisonContainer'
import { fetchStates as fetchStatesAction } from 'actions'

class App extends Component {
  componentDidMount() {
    const { fetchStates } = this.props
    fetchStates()
  }

  render() {
    return (
      <div className="flex justify-center sans-serif">
        <Card>
          <h1 className="fw6 f1 mt0 tc">Comprar ou Alugar?</h1>
          <div className="flex-ns">
            <div className="mt5-ns mh5-ns">
              <StateSelector />
              <RentInput />
              <BuyInput />
              <TimeInput />
              <InterestInput />
            </div>
            <ComparisonContainer />
          </div>
        </Card>
      </div>
    )
  }
}

App.propTypes = {
  fetchStates: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  fetchStates: () => dispatch(fetchStatesAction()),
})

export default connect(null, mapDispatchToProps)(App)
