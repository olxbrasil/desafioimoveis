import React from 'react'
import Card from 'components/Card'
import StateSelector from 'components/StateSelector'

const App = () => (
  <div className="flex justify-center sans-serif">
    <Card>
      <h1 className="fw6 f1 mt0 tc">Comprar ou Alugar?</h1>
      <div className="mh5">
        <StateSelector />
      </div>
    </Card>
  </div>
)

export default App
