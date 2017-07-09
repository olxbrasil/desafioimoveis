import React from 'react'
import Card from 'components/Card'
import StateSelector from 'components/StateSelector'
import RentInput from 'components/RentInput'
import BuyInput from 'components/BuyInput'
import TimeInput from 'components/TimeInput'
import InterestInput from 'components/InterestInput'
import ComparisonContainer from 'components/ComparisonContainer'

const App = () => (
  <div className="flex justify-center sans-serif">
    <Card>
      <h1 className="fw6 f1 mt0 tc">Comprar ou Alugar?</h1>
      <div className="mh5">
        <StateSelector />
        <RentInput />
        <BuyInput />
        <TimeInput />
        <InterestInput />
        <ComparisonContainer />
      </div>
    </Card>
  </div>
)

export default App
